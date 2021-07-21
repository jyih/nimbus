import { csrfFetch } from './csrf';

const LOAD_SONGS = 'songs/LOAD_SONGS'
const UPLOAD = 'songs/UPLOAD'

export const load = songs => ({
  type: LOAD_SONGS,
  songs,
});

export const upload = song => ({
  type: UPLOAD,
  song
})

//thunk
export const getSongs = () => async dispatch => {
  const res = await fetch(`/api/songs`);
  if (res.ok) {
    const songs = await res.json();
    dispatch(load(songs))
  }
}

export const getSong = id => async dispatch => {
  const res = await fetch(`/api/songs/${id}`);
  if (res.ok) {
    const song = await res.json();
    dispatch(song)
  }
}

export const uploadSong = (payload) => async dispatch => {
  const res = await csrfFetch('/api/songs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  if (res.ok) {
    const song = res.json();
    dispatch(upload(song))
    return song;
  }
}

const initialState = {}

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SONGS: {
      const allSongs = {};
      action.songs.forEach(song => {
        allSongs[song.id] = song;
      });
      return {
        ...state,
        ...allSongs,
      }
    }
    case UPLOAD: {
      return {
        ...state,
        song: { ...action.song },
      }
    }
    default:
      return state;
  }
}

export default songsReducer;