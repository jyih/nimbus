import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as songsActions from "../../store/songs";
import * as audioPlayerActions from "../../store/audioPlayer";
import "./SongList.css";

const SongList = () => {
  const dispatch = useDispatch();
  const songs = Object.values(useSelector((state) => state.songs))
  const noImageUrl = 'https://nimbus-sounds.s3.us-west-1.amazonaws.com/No_Image_Available.jpg'

  useEffect(() => {
    dispatch(songsActions.getSongs())
  }, [dispatch])

  return (
    <div className='song-list-container'>
      <div className='song-list'>
        {songs?.map(song => (
          <div className={`song-container song${song?.id}`} key={song?.id}>
            <div>
              <img
                className='song-album-art'
                src={song?.Album?.imageUrl || noImageUrl}
                alt={song?.Album?.title}
                onClick={() => dispatch(audioPlayerActions.setCurrent(song))}
              />
            </div>
            <div className='song-title-container'>
              <NavLink className='song-title' to={`/songs/${song?.id}`}>
                {song?.title}
              </NavLink>
            </div>
            <div className='song-artist'>
              {song?.User.username}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SongList;