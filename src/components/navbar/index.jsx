/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useRef } from "react";

import { COLORS, FONTS } from "utils/theme";
import Menu from "./menu";
import { useHistory, useLocation } from "react-router-dom";
import { spotifyLogout } from "adapters/spotifyAuth";

export default function Index() {
  const navbarRef = useRef(null);
  const history = useHistory();
  const path = useLocation().pathname;

  const logoutHandler = () => spotifyLogout().then(() => history.push("/"));

  const styles = {
    container: css`
      min-width: 100%;
      padding: 0 20%;
      position: absolute;
      top: 4rem;
      left: 0;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
      visibility: ${path === "/" && "hidden"};

      @media (max-width: 1600px) {
        visibility: hidden;
      }
    `,
    logo: css`
      margin: 0;
      padding: 0;
      font-family: "Noto Sans", sans-serif;
      font-size: ${FONTS.MENU};
      color: ${COLORS.PRIMARY};
      cursor: default;
    `,
  };

  return (
    <div ref={navbarRef} css={styles.container}>
      <h1 css={styles.logo}>My Spotify</h1>
      <Menu logoutHandler={logoutHandler} />
    </div>
  );
}
