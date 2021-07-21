/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

import { MENU_SELECTION } from "constants/dummyData";
import { COLORS } from "constants/theme";

import Navbar from "components/navbar";
import HandsonPage from "pages/handson";
import HomeworkEnhancedPage from "pages/homework";
import LandingPage from "pages/landing";
import SearchPage from "pages/search";

export default function App() {
  const containerRef = useRef(null);
  const [selectedMenu, setSelectedMenu] = useState(MENU_SELECTION[0]);
  const [hashToken, setHashToken] = useState();

  useEffect(() => {
    gsap.to(containerRef.current, {
      visibility: "visible",
      duration: 0.2,
    });
  }, []);

  const getTokenFromSpotifyIGF = (hash) => {
    const tokenHash = hash.substring(1);
    const params = tokenHash.split("&");
    const keyValueParams = {};

    params.map((param) => {
      const value = param.split("=");
      keyValueParams[value[0]] = value[1];
    });

    return keyValueParams;
  };

  useEffect(() => {
    if (window.location.hash) {
      setHashToken(getTokenFromSpotifyIGF(window.location.hash));
    }
  }, [window.location.hash]);

  const renderPage = () => {
    if (selectedMenu === MENU_SELECTION[0]) return <HomeworkEnhancedPage />;

    if (selectedMenu === MENU_SELECTION[1])
      return <SearchPage hashToken={hashToken} />;

    return <HandsonPage />;
  };

  const styles = {
    home: css`
      min-height: 100vh;
      display: grid;
      grid-template-rows: 8rem 1fr;
      background-color: ${COLORS.BG_DARK};
      visibility: hidden;
    `,
    landing: css`
      background-color: ${COLORS.BG_DARK};
      visibility: hidden;
    `,
  };

  // HOME PAGE
  if (hashToken) {
    return (
      <div ref={containerRef} css={styles.home}>
        <Navbar
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          setHashToken={setHashToken}
        />
        {renderPage()}
      </div>
    );
  }

  // LOGIN PAGE
  return (
    <div ref={containerRef} css={styles.landing}>
      <LandingPage />
    </div>
  );
}
