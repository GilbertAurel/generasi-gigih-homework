import { SET_PLAYLIST } from "redux/constant";

const initialState = {
  playlists: [],
};

export const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST:
      return {
        ...state,
        playlists: action.payload,
      };

    default:
      return state;
  }
};
