export const DEV_URL = encodeURIComponent('http://localhost:3000');
export const DEPLOYMENT_URL = encodeURIComponent('https://gfe01103-spotify.netlify.app');

const scope = [
  'user-read-currently-playing',
  'playlist-modify-private',
  'playlist-modify-public',
  'playlist-read-private',
  'user-read-playback-state',
].join('%20');

export const GIPHY_SEARCH_URL = 'https://api.giphy.com/v1/gifs/search';

export const GIPHY_GET_TRENDS_URL = 'https://api.giphy.com/v1/gifs/trending';

export const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_ID}&response_type=token&redirect_uri=${DEPLOYMENT_URL}&scope=${scope}`;

export const SPOTIFY_AUTH_LOGOUT = `https://accounts.spotify.com/en/logout`;

export const SPOTIFY_SEARCH_URL = 'https://api.spotify.com/v1/search';

export const SPOTIFY_USER_DATA_URL = 'https://api.spotify.com/v1/me';

export const SPOTIFY_CREATE_PLAYLIST_URL = (id) =>
  `https://api.spotify.com/v1/users/${id}/playlists`;

export const SPOTIFY_FETCH_PLAYLIST_URL = 'https://api.spotify.com/v1/me/playlists';

export const SPOTIFY_FETCH_PLAYLIST_TRACK_URL = (id) =>
  `https://api.spotify.com/v1/playlists/${id}/tracks`;

export const SPOTIFY_FETCH_CURRENTLY_PLAYING_URL = 'https://api.spotify.com/v1/me/player';

export const SPOTIFY_ADD_TO_PLAYLIST_URL = (id) =>
  `https://api.spotify.com/v1/playlists/${id}/tracks`;
