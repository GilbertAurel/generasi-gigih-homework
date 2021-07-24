import { SPOTIFY_AUTH_LOGOUT, SPOTIFY_AUTH_URL } from "constants/urls";

export function spotifyLogin() {
  return (window.location = SPOTIFY_AUTH_URL);
}

export function spotifyLogout() {
  return new Promise((resolve) => {
    const spotifyLogoutWindow = window.open(
      SPOTIFY_AUTH_LOGOUT,
      "Spotify Logout",
      "width=700,height=500"
    );

    setTimeout(() => {
      spotifyLogoutWindow.close();
      window.location = "";
      resolve();
    }, 2000);
  });
}
