import axios from "axios";

function fetchData(url, config) {
  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function GIPHY_FETCH_SEARCH(url, config) {
  return fetchData(url, config);
}

export function SPOTIFY_FETCH_SEARCH(url, config) {
  return fetchData(url, config);
}

export function SPOTIFY_FETCH_USER_DATA(url, config) {
  return fetchData(url, config);
}
