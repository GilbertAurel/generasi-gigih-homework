import axios from "axios";

import {
  SPOTIFY_ADD_TO_PLAYLIST_URL,
  SPOTIFY_CREATE_PLAYLIST_URL,
} from "constants/urls";

function postData(url, config, data) {
  return axios
    .post(url, data, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function SPOTIFY_CREATE_PLAYLIST(id, data, config) {
  return postData(SPOTIFY_CREATE_PLAYLIST_URL(id), config, data);
}

export function SPOTIFY_ADD_TO_PLAYLIST(config, id) {
  return postData(SPOTIFY_ADD_TO_PLAYLIST_URL(id), config);
}
