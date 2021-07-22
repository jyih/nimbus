const SET_CURRENT = 'songs/SET_CURRENT'


export const setCurrent = song => ({
  type: SET_CURRENT,
  song
})

const initialState = {}

const audioPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT: {
      const newState = { ...state };
      newState.currSong = action.song;
      return newState;
    }
    default:
      return state;
  }
}

export default audioPlayerReducer;