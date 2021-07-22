import { csrfFetch } from './csrf';

const LOAD_SONGS = 'songs/LOAD_SONGS';
const UPLOAD = 'songs/UPLOAD';
const EDIT = 'songs/EDIT'
const REMOVE = 'songs/REMOVE';

export const load = songs => ({
  type: LOAD_SONGS,
  songs,
});

export const upload = song => ({
  type: UPLOAD,
  song
})

export const edit = song => ({
  type: EDIT,
  song
})

export const remove = songId => ({
  type: REMOVE,
  songId
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

export const editSong = (songId, payload) => async dispatch => {
  const res = await csrfFetch(`/api/songs/${songId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  if (res.ok) {
    const song = res.json();
    dispatch(edit(song))
    return song;
  }
}

export const removeSong = (songId) => async dispatch => {
  const res = await csrfFetch(`/api/songs/${songId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  if (res.ok) {
    const deletedSongId = res.json();
    dispatch(remove(songId));
    return deletedSongId;
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
        ...action.song,
      }
    }
    case EDIT: {
      const newState = { ...state }
      // newState[]
      return {
        ...state,
        ...action.song,
      }
    }
    case REMOVE: {
      const newState = { ...state };
      delete newState[action.songId];
      return newState;
    }
    default:
      return state;
  }
}

export default songsReducer;