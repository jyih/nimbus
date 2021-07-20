import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

import { getSongs } from "../../store/songs";

const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs)

  useEffect(() => {
    dispatch(getSongs())
  }, [dispatch])

  return (
    <div className='song-list'>
      {console.log('return', songs)}
      <ul>
        {songs.map(song => (
          <li key={song}>
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SongList;