import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import * as songActions from "../../store/songs";
// import { getSongs, removeSong } from "../../store/songs";
import SongEditFormModal from "../SongEditFormModal";

function SongPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const songs = Object.values(useSelector((state) => state.songs))
  const song = songs?.find(song => song.id === +id)

  useEffect(() => {
    dispatch(songActions.getSongs())
  }, [dispatch])

  // const editOnClick = e => {
  //   dispatch(songActions.editSong(id))
  // }

  const removeOnClick = e => {
    dispatch(songActions.removeSong(id))
    history.push('/')
  }

  return (
    <>
      <div>
        <img className='song-album-art' src={song?.Album?.imageUrl} alt={song?.Album?.title} />
      </div>
      <audio controls src={song?.url} className='song-audio'>
        {/* <source src={song?.url} type="audio/mp3" /> */}
      </audio>
      <div className='song-artist'>
        {song?.User.username}
      </div>
      <div className='song-title'>
        {song?.title}
      </div>
      {/* <button onClick={e => editOnClick(e)}>Edit</button> */}
      {sessionUser?.id === song?.userId &&
        < div >
          <SongEditFormModal />
          <button onClick={e => removeOnClick(e)}>Delete</button>
        </div>
      }
    </>
  )
}

export default SongPage;