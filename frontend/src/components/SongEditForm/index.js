import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import * as songActions from "../../store/songs";
import * as albumActions from "../../store/album";

function SongEditForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const albums = useSelector((state) => state.session.albums);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [album, setAlbum] = useState("");
  const [albumId, setAlbumId] = useState("")
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!sessionUser) {
      return setErrors(['Please login to upload']);
    }

    setErrors([]);
    dispatch(songActions.uploadSong({
      userId: sessionUser.id,
      title,
      url,
      albumId,
      // albumId: (album ? album.id : albumId),
    }))
    //   .catch(async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   });
    history.push('/');
  };

  const updateAlbum = e => {
    setAlbum(e.target.value);
    setAlbumId(e.target.value.id)
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>
        Song Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Song Url
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </label>
      <label>
        Album
        {/* <input
          type="text"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          required
        /> */}
        <select onChange={updateAlbum}>
          <option value={null}>-No Album-</option>
          {albums?.map(album => {
            <option key={album.id} value={album}>{album.title}</option>
          })}
        </select>
      </label>
      {/* <label>
        Album Id
        <input
          type="number"
          value={albumId}
          onChange={(e) => setAlbumId(e.target.value)}
          required
        />
      </label> */}
      <button type="submit">Upload</button>
    </form>
  );
}

export default SongEditForm;