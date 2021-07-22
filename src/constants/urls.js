export const DEV_URL = encodeURIComponent("http://localhost:3000");

export const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_ID}&response_type=token&redirect_uri=${DEV_URL}&scope=playlist-modify-private`;

export const SPOTIFY_AUTH_LOGOUT = `https://accounts.spotify.com/logout?redirect_uri=${DEV_URL}`;

export const GIPHY_SEARCH_URL = "https://api.giphy.com/v1/gifs/search";

export const SPOTIFY_SEARCH_URL = "https://api.spotify.com/v1/search";
