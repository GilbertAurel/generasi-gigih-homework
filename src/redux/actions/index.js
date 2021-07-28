import fetchHandler from "adapters/fetchHandlers";

import {
  GET_NEW_GIF,
  SPOTIFY_LOGIN_AUTH,
  SPOTIFY_SET_PLAYLIST,
  SPOTIFY_SET_CURRENT_TRACKS,
  SPOTIFY_SET_CURRENTLY_PLAYING,
  SPOTIFY_ADD_CURRENT_TRACKS,
} from "redux/constant";

import {
  SPOTIFY_USER_DATA_URL,
  GIPHY_SEARCH_URL,
  SPOTIFY_FETCH_PLAYLIST_URL,
  SPOTIFY_FETCH_PLAYLIST_TRACK_URL,
  SPOTIFY_FETCH_CURRENTLY_PLAYING_URL,
} from "constants/urls";

import { SPOTIFY_PLAYLIST_OFFSET_LIMIT } from "constants/dummyData";

const { offset, limit } = SPOTIFY_PLAYLIST_OFFSET_LIMIT;

export function getNewGIF(GIPHY_KEY, inputValue, DATA_LIMIT) {
  const config = {
    params: {
      api_key: GIPHY_KEY,
      q: inputValue,
      limit: DATA_LIMIT,
    },
  };

  return (dispatch) => {
    fetchHandler(GIPHY_SEARCH_URL, config).then((res) => {
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
    fetchHandler(SPOTIFY_USER_DATA_URL, config).then((res) => {
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
    fetchHandler(SPOTIFY_FETCH_PLAYLIST_URL, config).then((res) =>
      dispatch({
        type: SPOTIFY_SET_PLAYLIST,
        payload: res.items,
      })
    );
  };
}

export function spotifyFetchPlaylistTracks(hashParams, id, market) {
  const { access_token } = hashParams;

  const config = {
    headers: {
      Authorization: "Bearer " + access_token,
    },
    params: {
      market: market,
      limit,
      offset,
    },
  };

  return (dispatch) => {
    fetchHandler(SPOTIFY_FETCH_PLAYLIST_TRACK_URL(id), config).then((res) => {
      dispatch({
        type: SPOTIFY_SET_CURRENT_TRACKS,
        payload: res.items.map((item) => item.track),
      });
    });
  };
}

export function spotifyAddPlaylistTracks(hashParams, id, market, newOffset) {
  const { access_token } = hashParams;

  const config = {
    headers: {
      Authorization: "Bearer " + access_token,
    },
    params: {
      market: market,
      limit,
      offset: limit * newOffset,
    },
  };

  return (dispatch) => {
    fetchHandler(SPOTIFY_FETCH_PLAYLIST_TRACK_URL(id), config).then((res) => {
      dispatch({
        type: SPOTIFY_ADD_CURRENT_TRACKS,
        payload: res.items.map((item) => item.track),
      });
    });
  };
}

export function spotifyFetchCurrentlyPlaying(hashParams, market) {
  const { access_token } = hashParams;

  const config = {
    headers: {
      Authorization: "Bearer " + access_token,
    },
    params: {
      market: market,
    },
  };

  return (dispatch) => {
    fetchHandler(SPOTIFY_FETCH_CURRENTLY_PLAYING_URL, config).then((res) =>
      dispatch({
        type: SPOTIFY_SET_CURRENTLY_PLAYING,
        payload: res.item,
      })
    );
  };
}

export function spotifyChangeSong(song) {
  return (dispatch) => {
    dispatch({
      type: SPOTIFY_SET_CURRENTLY_PLAYING,
      payload: song,
    });
  };
}
