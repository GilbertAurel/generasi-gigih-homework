/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";

import { MENU_SELECTION } from "constants/dummyData";
import { hashSeparator } from "constants/converter";
import { COLORS } from "constants/theme";
import { spotifyLogin, spotifyLogout } from "adapters/spotifyAuth";
import { SPOTIFY_FETCH_USER_DATA } from "adapters/fetchHandlers";

import { Provider } from "react-redux";
import rootReducer from "redux/reducers";

import Navbar from "components/navbar";
import HandsonPage from "pages/handson";
import HomeworkPage from "pages/homework";
import LandingPage from "pages/landing";

const initialAuthState = {
  spotifyToken: "",
  user: "",
};

const HASH_SUBSTRING_INDEX = 1;

const store = rootReducer;

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState(MENU_SELECTION[0]);
  const [{ spotifyToken, user }, setSpotifyAuth] = useState(initialAuthState);

  useEffect(() => {
    if (window.location.hash) {
      setSpotifyAuth((currentState) => ({
        ...currentState,
        spotifyToken: hashSeparator(window.location.hash, HASH_SUBSTRING_INDEX),
      }));
    }
  }, []);

  useEffect(() => {
    if (spotifyToken) {
      const config = {
        headers: {
          Authorization: "Bearer " + spotifyToken.access_token,
        },
      };

      SPOTIFY_FETCH_USER_DATA(config).then((res) =>
        setSpotifyAuth((currentState) => ({ ...currentState, user: res }))
      );
    }
  }, [spotifyToken]);

  const loginHandler = () => spotifyLogin();

  const logoutHandler = async () => {
    await spotifyLogout();
    return setSpotifyAuth(initialAuthState);
  };

  const selectMenuHandler = (menu) => setSelectedMenu(menu);

  if (!spotifyToken) return <LandingPage loginHandler={loginHandler} />;

  return (
    <Provider store={store}>
      <div
        css={css`
          background-color: ${COLORS.BG_DARK};
        `}
      >
        <Navbar
          selectedMenu={selectedMenu}
          selectMenuHandler={selectMenuHandler}
          logoutHandler={logoutHandler}
        />
        {selectedMenu === MENU_SELECTION[0] ? (
          <HomeworkPage spotifyToken={spotifyToken} user={user} />
        ) : (
          <HandsonPage />
        )}
      </div>
    </Provider>
  );
}
