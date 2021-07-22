/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { COLORS, FONTS } from "constants/theme";
import { MENU_SELECTION } from "constants/dummyData";

export default function Menu({ selectedMenu, setSelectedMenu, setHashToken }) {
  const logoutHandler = () => {
    const url = "https://accounts.spotify.com/en/logout";
    const spotifyLogoutWindow = window.open(
      url,
      "Spotify Logout",
      "width=700,height=500,top=40,left=40"
    );

    return setTimeout(() => {
      spotifyLogoutWindow.close();
      setHashToken("");
      window.location = "";
    }, 2000);
  };

  const RenderMenuList = () => {
    return MENU_SELECTION.map((menu, index) => (
      <p
        key={index}
        onClick={() => setSelectedMenu(menu)}
        css={css`
          margin: 0;
          padding: 0;
          font-family: "Noto Sans", sans-serif;
          font-size: ${FONTS.BODY};
          cursor: pointer;
          transition: color 0.6s;
          color: ${menu === selectedMenu
            ? COLORS.BTN_ACTIVE_DARK
            : COLORS.BTN_NOT_ACTIVE_DARK};

          :hover {
            color: ${COLORS.BTN_ACTIVE_DARK};
          }
        `}
      >
        {menu}
      </p>
    ));
  };

  const RenderLogout = () => {
    return (
      <p
        onClick={logoutHandler}
        css={css`
          margin: 0;
          padding: 0;
          font-family: "Noto Sans", sans-serif;
          font-size: ${FONTS.BODY};
          cursor: pointer;
          transition: color 0.6s;
          color: ${COLORS.BTN_NOT_ACTIVE_DARK};

          :hover {
            color: ${COLORS.BTN_ACTIVE_DARK};
          }
        `}
      >
        Sign out
      </p>
    );
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        gap: 100px;

        @media (max-width: 1600px) {
          visibility: hidden;
        }
      `}
    >
      <RenderMenuList />
      <RenderLogout />
    </div>
  );
}
