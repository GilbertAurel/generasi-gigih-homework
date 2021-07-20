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
  const getHashToken = window.location.hash.split("=")[1];

  const selectMenuHandler = (menu) => {
    setSelectedMenu(menu);
  };

  useEffect(() => {
    gsap.to(containerRef.current, {
      visibility: "visible",
      duration: 0.2,
    });
  }, []);

  useEffect(() => {
    setHashToken(getHashToken);
  }, [getHashToken]);

  const renderPage = () => {
    if (selectedMenu === MENU_SELECTION[0]) return <HomeworkEnhancedPage />;
    if (selectedMenu === MENU_SELECTION[1])
      return <SearchPage hashToken={hashToken} />;
    return <HandsonPage />;
  };

  if (hashToken)
    return (
      <div
        ref={containerRef}
        css={css`
          min-height: 100vh;
          display: grid;
          grid-template-rows: 8rem 1fr;
          background-color: ${COLORS.BG_DARK};
          visibility: hidden;
        `}
      >
        <Navbar
          selectedMenu={selectedMenu}
          selectMenuHandler={selectMenuHandler}
        />
        {renderPage()}
      </div>
    );

  return (
    <div
      ref={containerRef}
      css={css`
        min-height: 100vh;
        display: grid;
        grid-template-rows: 8rem 1fr;
        background-color: ${COLORS.BG_DARK};
        visibility: hidden;
      `}
    >
      <LandingPage />
    </div>
  );
}
