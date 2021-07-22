import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as songActions from "../../store/songs";
import './SongUploadPage.css';
import { useHistory } from "react-router-dom";

function SongUploadForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
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
        <input
          type="text"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          required
        />
      </label>
      <label>
        Album Id
        <input
          type="number"
          value={albumId}
          onChange={(e) => setAlbumId(e.target.value)}
          required
        />
      </label>
      <button type="submit">Upload</button>
    </form>
  );
}

export default SongUploadForm;