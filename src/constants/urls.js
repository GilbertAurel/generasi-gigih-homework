export const DEV_URL = encodeURIComponent("http://localhost:3000");

const scope = [
  "user-read-currently-playing",
  "playlist-modify-private",
  "playlist-modify-public",
  "playlist-read-private",
].join("%20");

export const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_ID}&response_type=token&redirect_uri=${DEV_URL}&scope=${scope}`;

export const SPOTIFY_AUTH_LOGOUT = `https://accounts.spotify.com/en/logout`;

export const GIPHY_SEARCH_URL = "https://api.giphy.com/v1/gifs/search";

export const SPOTIFY_SEARCH_URL = "https://api.spotify.com/v1/search";

export const SPOTIFY_USER_DATA_URL = "https://api.spotify.com/v1/me";

export const SPOTIFY_CREATE_PLAYLIST_URL = (user_id) =>
  `https://api.spotify.com/v1/users/${user_id}/playlists`;

export const SPOTIFY_FETCH_PLAYLIST_URL =
  "https://api.spotify.com/v1/me/playlists";

export const SPOTIFY_FETCH_PLAYLIST_TRACK_URL = (playlist_id) =>
  `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;

export const SPOTIFY_FETCH_CURRENTLY_PLAYING_URL =
  "https://api.spotify.com/v1/me/player/currently-playing";

export const SPOTIFY_ADD_TO_PLAYLIST_URL = (playlist_id) =>
  `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;
