import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSongs } from "../../store/songs";

const AudioPlayer = () => {
  const dispatch = useDispatch();
  const songs = Object.values(useSelector((state) => state.songs))
  const [currSong, setCurrSong] = useState('');
  //https://nimbus-sounds.s3.us-west-1.amazonaws.com/Mumford+%26+Sons+-+I+Will+Wait+(Bloombox+%26+Sam+Feldt+Remix).mp3
  useEffect(() => {
    dispatch(getSongs())
  }, [dispatch])

  // const element = ReactDom.findDOMNode(this)

  const selectSong = async (e, url) => {
    e.preventDefault();
    setCurrSong(url)
    // const player = document.querySelector('#audioPlayer')
    // player.pause();
    // player.load();
    // player.play();
  }

  return (
    <div className="container-player">
      <audio controls autoPlay id='audioPlayer' src={currSong}>
        {/* <source src={currSong} type="audio/mp3" /> */}
      </audio>
      <ul id='playlist'>
        {songs?.map(song => (
          <li key={song.id} onClick={e => selectSong(e, song.url)}>
            <a href={song.url}>
              {song.title}
            </a>
          </li>
        ))}
      </ul>
      {/* {audioPlayer()} */}
    </div >
  )
}

export default AudioPlayer;