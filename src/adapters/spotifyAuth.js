import { SPOTIFY_AUTH_LOGOUT, SPOTIFY_AUTH_URL } from 'utils/urls';

export function spotifyLogin() {
  window.location = SPOTIFY_AUTH_URL;
}

export function spotifyLogout() {
  const spotifyLogoutWindow = window.open(
    SPOTIFY_AUTH_LOGOUT,
    'Spotify Logout',
    'width=700,height=500'
  );

  return new Promise((resolve) =>
    setTimeout(() => {
      spotifyLogoutWindow.close();
      resolve();
    }, 2000)
  );
}
