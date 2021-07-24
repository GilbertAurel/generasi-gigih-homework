import axios from "axios";

function postData(url, config) {
  return axios
    .post(url, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function SPOTIFY_CREATE_PLAYLIST(url, config) {
  return postData(url, config);
}
