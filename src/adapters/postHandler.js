import axios from "axios";

import { SPOTIFY_CREATE_PLAYLIST_URL } from "constants/urls";

function postData(url, data, config) {
  return axios
    .post(url, data, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function SPOTIFY_CREATE_PLAYLIST(id, data, config) {
  return postData(SPOTIFY_CREATE_PLAYLIST_URL(id), data, config);
}
