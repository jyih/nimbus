import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './SongForm.css';
import * as songActions from "../../store/songs";
import * as albumsActions from "../../store/albums";

function SongUploadForm() {
  // const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  // const songs = useSelector((state) => state.songs);
  const albums = Object.values(useSelector((state) => state.albums));

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [albumId, setAlbumId] = useState(0)
  const [errors, setErrors] = useState([]);

  if (!sessionUser) history.push('/');
  // if (id && songs) {
  //   setTitle(songs[id].title)
  //   setUrl(songs[id].title)
  //   setAlbumId(songs[id].albumId)
  // }

  useEffect(() => {
    dispatch(albumsActions.getUserAlbums(sessionUser.id))
  }, [dispatch, sessionUser.id])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!sessionUser) {
      return setErrors(['Please login to upload']);
    }

    setErrors([]);
    // if (id) {
    //   dispatch(songActions.editSong(id, {
    //     title,
    //     url,
    //     albumId,
    //   }))
    // } else {
    dispatch(songActions.uploadSong({
      userId: sessionUser.id,
      title,
      url,
      albumId,
    }))
    // }

    history.push('/');
  };

  return (
    <div className='form-container song-form-container'>
      <h1>Upload Song</h1>
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
          <select onChange={e => setAlbumId(e.target.value)}>
            <option value={null}>-No Album-</option>
            {albums && albums.map(album =>
              <option key={album.id} value={album.id}>{album.title}</option>
            )}
          </select>
        </label>
        <div className='form-button-container'>
          <button type="submit">{
            // id ? "Submit Edits" : 
            "Upload"}</button>
        </div>
      </form>
    </div>
  );
}

export default SongUploadForm;