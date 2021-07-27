import {
  SPOTIFY_SET_PLAYLIST,
  SPOTIFY_SET_CURRENT_TRACKS,
  SPOTIFY_SET_CURRENTLY_PLAYING,
} from "redux/constant";

const initialState = {
  playlists: [],
  currentTracks: [],
  currentlyPlaying: {},
};

export const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPOTIFY_SET_PLAYLIST:
      return {
        ...state,
        playlists: action.payload,
      };
    case SPOTIFY_SET_CURRENT_TRACKS:
      return {
        ...state,
        currentTracks: action.payload,
      };
    case SPOTIFY_SET_CURRENTLY_PLAYING:
      return {
        ...state,
        currentlyPlaying: action.payload,
      };
    default:
      return state;
  }
};
