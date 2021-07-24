/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";

import { MENU_SELECTION } from "constants/dummyData";
import { hashSeparator } from "constants/converter";
import { COLORS } from "constants/theme";
import { spotifyLogin, spotifyLogout } from "adapters/spotifyAuth";

import Navbar from "components/navbar";
import HandsonPage from "pages/handson";
import HomeworkPage from "pages/homework";
import LandingPage from "pages/landing";

export default function App() {
  const HASH_SUBSTRING_INDEX = 1;
  const [selectedMenu, setSelectedMenu] = useState(MENU_SELECTION[0]);
  const [hashToken, setHashToken] = useState();

  useEffect(() => {
    if (window.location.hash) {
      setHashToken(hashSeparator(window.location.hash, HASH_SUBSTRING_INDEX));
    }
  }, []);

  const loginHandler = () => spotifyLogin();

  const logoutHandler = () => spotifyLogout().then(() => setHashToken(""));

  const selectMenuHandler = (menu) => {
    setSelectedMenu(menu);
  };

  if (!hashToken) return <LandingPage loginHandler={loginHandler} />;

  return (
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
        <HomeworkPage hashToken={hashToken} />
      ) : (
        <HandsonPage />
      )}
    </div>
  );
}
