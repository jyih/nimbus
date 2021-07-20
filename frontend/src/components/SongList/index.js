import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

import { getSongs } from "../../store/songs";

const SongList = () => {
  const dispatch = useDispatch();
  const songs = Object.values(useSelector((state) => state.songs))

  useEffect(() => {
    dispatch(getSongs())
  }, [dispatch])

  return (
    <div className='song-list'>
      {songs?.map(song => (
        <ul key={song}>
          <audio controls autoplay className='song-audio'>
            <source src={song.url} type="audio/mp3" />
          </audio>
          <div className='song-title'>
            {song.title}
          </div>
        </ul>
      ))}
    </div>
  )
}

export default SongList;