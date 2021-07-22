import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import './SongUploadPage.css';
import songsReducer, * as songActions from "../../store/songs";
import * as albumActions from "../../store/album";

function SongUploadForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const albums = useSelector((state) => state.session.albums);
  const songs = useSelector((state) => state.session.songs);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  // const [album, setAlbum] = useState("");
  const [albumId, setAlbumId] = useState(0)
  const [errors, setErrors] = useState([]);

  if (id && songs) {
    setTitle(songs[id].title)
    setUrl(songs[id].title)
    setAlbumId(songs[id].albumId)
  }

  useEffect(() => {
    dispatch(albumActions.getUserAlbums(sessionUser.id))
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!sessionUser) {
      return setErrors(['Please login to upload']);
    }

    setErrors([]);
    if (id) {
      dispatch(songActions.editSong(id, {
        title,
        url,
        albumId,
      }))
    } else {
      dispatch(songActions.uploadSong({
        userId: sessionUser.id,
        title,
        url,
        albumId,
      }))
    }

    history.push('/');
  };

  const updateAlbum = e => {
    if (e.target.value) {
      setAlbumId(e.target.value.id)
    }
  }

  return (
    <div className='song-form-container'>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
          {'Song Title: '}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          {'Song Url: '}
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </label>
        <label>
          {'Album: '}
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
        <div className='button-container'>
          <button type="submit">{id ? "Submit" : "Upload"}</button>
        </div>
      </form>
    </div>
  );
}

export default SongUploadForm;