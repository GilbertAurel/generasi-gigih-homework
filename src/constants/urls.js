export const DEV_URL = "http://localhost:3000";

export const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_ID}&response_type=token&redirect_uri=${DEV_URL}&scope=playlist-modify-private`;

export const GIPHY_SEARCH_URL = (apiKey, query, limitPerPage) => {
  return `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limitPerPage}`;
};

export const SPOTIFY_SEARCH_URL = "https://api.spotify.com/v1/search";
