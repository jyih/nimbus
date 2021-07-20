
const LOAD = 'songs/LOAD'

export const load = songs => ({
  type: LOAD,
  songs,
});

//thunk
export const getSongs = () => async dispatch => {
  const res = await fetch(`/api/songs`);
  if (res.ok) {
    const songs = await res.json();
    console.log('store.songs:', songs)
    dispatch(load(songs))
  }
}

const initialState = {
  songs: [],
}

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allSongs = {};
      action.songs.forEach(song => {
        allSongs[song.id] = song;
      });
      return {
        ...state,
        ...allSongs,
      }
    }
    default:
      return state;
  }
}

export default songsReducer;