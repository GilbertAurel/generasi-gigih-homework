import {
  GIPHY_FETCH_SEARCH,
  SPOTIFY_FETCH_USER_DATA,
  SPOTIFY_FETCH_PLAYLIST,
} from "adapters/fetchHandlers";
import {
  GET_NEW_GIF,
  SPOTIFY_LOGIN_AUTH,
  SPOTIFY_SET_PLAYLIST,
} from "redux/constant";

export function getNewGIF(GIPHY_KEY, inputValue, DATA_LIMIT) {
  const config = {
    params: {
      api_key: GIPHY_KEY,
      q: inputValue,
      limit: DATA_LIMIT,
    },
  };

  return (dispatch) => {
    GIPHY_FETCH_SEARCH(config).then((res) => {
      dispatch({
        type: GET_NEW_GIF,
        payload: res.data.map((gif) => gif.images.original.url),
      });
    });
  };
}

export function spotifyLoginAuth(hashParams) {
  const { access_token } = hashParams;

  const config = {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  };

  return (dispatch) => {
    SPOTIFY_FETCH_USER_DATA(config).then((res) => {
      const payload = {
        token: access_token,
        user: res,
      };

      dispatch({
        type: SPOTIFY_LOGIN_AUTH,
        payload: payload,
      });
    });
  };
}

export function spotifyFetchPlaylist(hashParams) {
  const { access_token } = hashParams;

  const config = {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  };

  return (dispatch) => {
    SPOTIFY_FETCH_PLAYLIST(config).then((res) => {
      dispatch({
        type: SPOTIFY_SET_PLAYLIST,
        payload: res.items,
      });
    });
  };
}
