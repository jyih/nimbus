import { csrfFetch } from './csrf';

const LOAD_ALBUMS = 'albums/LOAD_ALBUMS'
const CREATE = 'albums/CREATE'

export const load = albums => ({
  type: LOAD_ALBUMS,
  albums
});

export const create = album => ({
  type: CREATE,
  album
});

export const getUserAlbums = (id) => async dispatch => {
  const res = await csrfFetch(`/api/users/${id}/albums`)
  if (res.ok) {
    const albums = await res.json();
    dispatch(load(albums))
    return albums;
  }
}

export const createAlbum = (payload) => async dispatch => {
  const { userId, title, imageUrl } = payload;
  const res = await csrfFetch(`/api/albums/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId,
      title,
      imageUrl
    })
  })

  if (res.ok) {
    const album = res.json();
    dispatch(create(album))
    return album;
  }
}

const initialState = {}

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALBUMS: {
      const allAlbums = {};
      action.albums.forEach(album => {
        allAlbums[album.id] = album;
      });
      return {
        ...state,
        ...allAlbums,
      }
    }
    case CREATE: {
      return {
        ...state,
        album: { ...action.album },
      }
    }
    // case REMOVE: {
    //   const newState = { ...state };
    //   delete newState[action.songId];
    //   return newState;
    // }
    default:
      return state;
  }
}

export default albumsReducer;