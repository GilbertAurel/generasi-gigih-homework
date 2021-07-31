import axios from 'axios';
import { SPOTIFY_SEARCH_URL } from 'utils/urls';

export default function fetchData(url, config = {}) {
  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function SPOTIFY_FETCH_SEARCH(config) {
  return fetchData(SPOTIFY_SEARCH_URL, config);
}
