// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import * as songsActions from "../../store/songs";
import * as audioPlayerActions from "../../store/audioPlayer";
import './AudioPlayer.css'

const AudioPlayer = () => {
  const dispatch = useDispatch();
  const songs = Object.values(useSelector((state) => state.songs));
  const currSong = useSelector(state => state.audioPlayer.currSong);
  // const [currSong, setCurrSong] = useState('');
  // const [currSongUrl, setCurrSongUrl] = useState('');

  // useEffect(() => {
  //   // dispatch(songsActions.getSongs())
  // }, [dispatch])

  const selectSong = async (e, song) => {
    e.preventDefault();
    // setCurrSong(song.url)
    dispatch(audioPlayerActions.setCurrent(song))
    // setCurrSongUrl(currSong?.url)
    // console.log(currSongUrl)
  }

  return (
    <>
      <ul hidden id='playlist'>
        {songs?.map(song => (
          <li key={song.id} onClick={e => selectSong(e, song)}>
            <a href={song.url}>
              {song.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="audio-container">
        <audio controls autoPlay id='audioPlayer' src={currSong?.url}>
        </audio>
      </div >
    </>
  )
}

export default AudioPlayer;