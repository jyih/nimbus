import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import * as songActions from "../../store/songs";
// import { getSongs, removeSong } from "../../store/songs";
import SongEditFormModal from "../SongEditFormModal";

function SongPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const stateVar = useSelector(state => state);
  const songs = Object.values(useSelector((state) => state.songs))
  const song = songs?.find(song => song.id === +id)

  useEffect(() => {
    dispatch(songActions.getSongs())
  }, [dispatch])

  console.log("stateVar:", stateVar)
  console.log("stateVar.songs:", stateVar.songs)
  console.log("id:", id)
  console.log('songs:', songs)
  console.log('song:', song)

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
      <SongEditFormModal />
      <button onClick={e => removeOnClick(e)}>Delete</button>
    </>
  )
}

export default SongPage;