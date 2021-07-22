import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as songsActions from "../../store/songs";
import * as audioPlayerActions from "../../store/audioPlayer";
import "./SongList.css";

const SongList = () => {
  const dispatch = useDispatch();
  const songs = Object.values(useSelector((state) => state.songs))

  useEffect(() => {
    dispatch(songsActions.getSongs())
    // console.log('songs from songlist:', songs)
  }, [dispatch])

  return (
    <div className='song-list-container'>
      <div className='song-list'>
        {songs?.map(song => (
          <div className={`song-container song${song?.id}`} key={song?.id}>
            <div>
              <img
                className='song-album-art'
                src={song?.Album?.imageUrl}
                alt={song?.Album?.title}
                onClick={() => dispatch(audioPlayerActions.setCurrent(song))}
              />
            </div>
            <div className='song-artist'>
              {song?.User.username}
            </div>
            <div className='song-title'>
              <a href={`/songs/${song?.id}`}>
                {song?.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SongList;