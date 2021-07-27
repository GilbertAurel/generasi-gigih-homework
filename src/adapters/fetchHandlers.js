import axios from "axios";
import {
  SPOTIFY_SEARCH_URL,
  SPOTIFY_USER_DATA_URL,
  GIPHY_SEARCH_URL,
} from "constants/urls";

function fetchData(url, config) {
  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function GIPHY_FETCH_SEARCH(config) {
  return fetchData(GIPHY_SEARCH_URL, config);
}

export function SPOTIFY_FETCH_SEARCH(config) {
  return fetchData(SPOTIFY_SEARCH_URL, config);
}

export function SPOTIFY_FETCH_USER_DATA(config) {
  return fetchData(SPOTIFY_USER_DATA_URL, config);
}
