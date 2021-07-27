export const DEV_URL = encodeURIComponent("http://localhost:3000");

export const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_ID}&response_type=token&redirect_uri=${DEV_URL}&scope=playlist-modify-private%20playlist-read-private`;

export const SPOTIFY_AUTH_LOGOUT = `https://accounts.spotify.com/en/logout`;

export const GIPHY_SEARCH_URL = "https://api.giphy.com/v1/gifs/search";

export const SPOTIFY_SEARCH_URL = "https://api.spotify.com/v1/search";

export const SPOTIFY_USER_DATA_URL = "https://api.spotify.com/v1/me";

export const SPOTIFY_CREATE_PLAYLIST_URL = (id) =>
  `https://api.spotify.com/v1/users/${id}/playlists`;

export const SPOTIFY_FETCH_PLAYLIST_URL =
  "https://api.spotify.com/v1/me/playlists";
