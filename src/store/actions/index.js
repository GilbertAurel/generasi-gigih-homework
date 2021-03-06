import fetchHandler from 'adapters/fetchHandlers';

import {
  GET_NEW_GIF,
  GIPHY_GET_TRENDING,
  SPOTIFY_LOGIN_AUTH,
  SPOTIFY_SET_PLAYLIST,
  SPOTIFY_SET_CURRENT_TRACKS,
  SPOTIFY_SET_CURRENTLY_PLAYING,
  SPOTIFY_ADD_CURRENT_TRACKS,
  SPOTIFY_CHANGE_PLAYLIST_ID,
} from 'store/constant';

import {
  SPOTIFY_USER_DATA_URL,
  GIPHY_SEARCH_URL,
  SPOTIFY_FETCH_PLAYLIST_URL,
  SPOTIFY_FETCH_PLAYLIST_TRACK_URL,
  SPOTIFY_FETCH_CURRENTLY_PLAYING_URL,
  GIPHY_GET_TRENDS_URL,
} from 'utils/urls';

const playlistPaging = { offset: 0, limit: 15, market: 'ES' };
const gifPaging = { limit: 6 };

export function giphyFetchSearchResult(GIPHY_KEY, inputValue) {
  const { limit } = gifPaging;

  const config = {
    params: {
      api_key: GIPHY_KEY,
      q: inputValue,
      limit,
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

export function giphyFetchTrending(GIPHY_KEY) {
  const { limit } = gifPaging;

  const config = {
    params: {
      api_key: GIPHY_KEY,
      limit,
    },
  };

  return (dispatch) => {
    fetchHandler(GIPHY_GET_TRENDS_URL, config).then((res) => {
      dispatch({
        type: GIPHY_GET_TRENDING,
        payload: res.data.map((gif) => gif.images.original.url),
      });
    });
  };
}

export function spotifyLoginAuth(hashParams) {
  // eslint-disable-next-line camelcase
  const { access_token, expires_in } = hashParams;

  const config = {
    headers: {
      // eslint-disable-next-line camelcase
      Authorization: `Bearer ${access_token}`,
    },
  };

  return (dispatch) => {
    fetchHandler(SPOTIFY_USER_DATA_URL, config).then((res) => {
      const payload = {
        // eslint-disable-next-line camelcase
        token: access_token,
        expires: expires_in,
        user: res,
      };

      dispatch({
        type: SPOTIFY_LOGIN_AUTH,
        payload,
      });
    });
  };
}

export function spotifyFetchPlaylist(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
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

export function spotifyFetchPlaylistTracks(token, id) {
  const { offset, limit, market } = playlistPaging;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      market,
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

export function spotifySetPlaylistId(id) {
  return (dispatch) => {
    dispatch({
      type: SPOTIFY_CHANGE_PLAYLIST_ID,
      payload: id,
    });
  };
}

export function spotifyAddPlaylistTracks(token, id, newOffset) {
  const { limit, market } = playlistPaging;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      market,
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

export function spotifyFetchCurrentlyPlaying(token) {
  const { market } = playlistPaging;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      market,
    },
  };

  return (dispatch) => {
    fetchHandler(SPOTIFY_FETCH_CURRENTLY_PLAYING_URL, config).then((res) => {
      if (res) {
        dispatch({
          type: SPOTIFY_SET_CURRENTLY_PLAYING,
          payload: res?.item,
        });
      }
    });
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
