import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
// import './SongForm.css';
import * as songActions from "../../store/songs";
import * as albumsActions from "../../store/albums";

function SongEditForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const songs = useSelector((state) => state.songs);
  const albums = Object.values(useSelector((state) => state.albums));

  const [title, setTitle] = useState(songs[id].title);
  const [url, setUrl] = useState(songs[id].title);
  const [albumId, setAlbumId] = useState(songs[id].albumId)
  const [errors, setErrors] = useState([]);

  if (!sessionUser) history.push('/');

  useEffect(() => {
    dispatch(albumsActions.getUserAlbums(sessionUser.id))
  }, [dispatch, sessionUser.id])

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([]);

    dispatch(songActions.editSong(id, {
      title,
      url,
      albumId,
    }))

    history.push('/');
  };

  return (
    <div className='form-container song-form-container'>
      <h1>Edit Song</h1>
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
          <select value={albumId} onChange={e => setAlbumId(e.target.value)}>
            <option value={null}>-No Album-</option>
            {albums && albums.map(album =>
              <option key={album.id} value={album.id}>{album.title}</option>
            )}
          </select>
        </label>
        <div className='form-button-container'>
          <button type="submit">{"Submit Edits"}</button>
        </div>
      </form>
    </div>
  );
}

export default SongEditForm;