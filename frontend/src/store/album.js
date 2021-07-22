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
  const res = await csurfFetch(`/api/users/${id}/albums`)
  if (res.ok) {
    const albums = await res.json();
    dispatch(load(albums))
  }
}

export const createAlbum = (payload) => async dispatch => {
  const { userId, title, imageUrl } = payload;
  const res = await csurfFetch(`/api/albums/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId,
      title,
      imageUrl
    })
  })
}