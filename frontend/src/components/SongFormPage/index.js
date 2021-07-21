import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as songActions from "../../store/songs";
import './SongFormPage.css';

function SongUploadPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [album, setAlbum] = useState("");
  const [albumId, setAlbumId] = useState("")
  const [errors, setErrors] = useState([]);

  // if (!sessionUser) return <Redirect to="/signup" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([]);
    return dispatch(songActions.upload({
      userId: sessionUser.id,
      title,
      url,
      // albumId: (album ? album.id : albumId),
      albumId,
    }))
    //   .catch(async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   });

    // return setErrors(['Confirm Password field must be the same as the Password field']);
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

export default SongUploadPage;