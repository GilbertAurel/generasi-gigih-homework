import axios from "axios";

async function fetchData(url, config) {
  return await axios
    .get(url, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export async function GIPHY_FETCH_SEARCH(url, config) {
  return await fetchData(url, config);
}

export async function SPOTIFY_FETCH_SEARCH(url, config) {
  return await fetchData(url, config);
}
