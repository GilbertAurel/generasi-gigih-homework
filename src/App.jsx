/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";

import { MENU_SELECTION } from "constants/dummyData";
import { hashSeparator } from "constants/converter";
import { COLORS } from "constants/theme";
import { spotifyLogin, spotifyLogout } from "adapters/spotifyAuth";

import { Provider } from "react-redux";
import rootReducer from "redux/reducers";

import Navbar from "components/navbar";
import HandsonPage from "pages/handson";
import HomeworkPage from "pages/homework";
import LandingPage from "pages/landing";

const HASH_SUBSTRING_INDEX = 1;

const store = rootReducer;

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState(MENU_SELECTION[0]);
  const [spotifyToken, setSpotifyAuth] = useState("");

  useEffect(() => {
    if (window.location.hash) {
      setSpotifyAuth(hashSeparator(window.location.hash, HASH_SUBSTRING_INDEX));
    }
  }, []);

  const loginHandler = () => spotifyLogin();

  const logoutHandler = async () => {
    await spotifyLogout();
    return setSpotifyAuth("");
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
          <HomeworkPage spotifyToken={spotifyToken} />
        ) : (
          <HandsonPage />
        )}
      </div>
    </Provider>
  );
}
