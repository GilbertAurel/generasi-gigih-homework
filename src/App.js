/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

import { MENU_SELECTION } from "constants/dummyData";
import { COLORS } from "constants/theme";

import Navbar from "components/navbar";
import HandsonPage from "pages/handson";
import HomeworkPage from "pages/homework";
import LandingPage from "pages/landing";
import { hashSeparator } from "constants/converter";

export default function App() {
  const HASH_SUBSTRING_INDEX = 1;
  const containerRef = useRef(null);
  const [selectedMenu, setSelectedMenu] = useState(MENU_SELECTION[0]);
  const [hashToken, setHashToken] = useState();

  useEffect(() => {
    gsap.to(containerRef.current, {
      visibility: "visible",
      duration: 0.2,
    });

    if (window.location.hash) {
      setHashToken(hashSeparator(window.location.hash, HASH_SUBSTRING_INDEX));
    }
  }, []);

  const RenderPage = () => {
    if (selectedMenu === MENU_SELECTION[0])
      return <HomeworkPage hashToken={hashToken} />;

    return <HandsonPage />;
  };

  return (
    <div
      ref={containerRef}
      css={css`
        min-height: 100vh;
        background-color: ${COLORS.BG_DARK};
        visibility: hidden;
      `}
    >
      {hashToken ? (
        <>
          <Navbar
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            setHashToken={setHashToken}
          />
          <RenderPage />
        </>
      ) : (
        <LandingPage />
      )}
    </div>
  );
}
