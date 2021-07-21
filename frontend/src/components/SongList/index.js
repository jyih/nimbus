import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
        <ul key={song.id}>
          <div>
            <img className='song-album-art' src={song.Album.imageUrl} alt={song.Album.title} />
          </div>
          <audio controls className='song-audio'>
            <source src={song.url} type="audio/mp3" />
          </audio>
          <div className='song-artist'>
            {song.User.username}
          </div>
          <div className='song-title'>
            {song.title}
          </div>
        </ul>
      ))}
    </div>
  )
}

export default SongList;