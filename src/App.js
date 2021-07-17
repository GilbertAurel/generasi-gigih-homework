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

export default function App() {
  const containerRef = useRef(null);
  const [selectedMenu, setSelectedMenu] = useState(MENU_SELECTION[0]);

  const selectMenuHandler = (menu) => {
    setSelectedMenu(menu);
  };

  useEffect(() => {
    gsap.to(containerRef.current, {
      visibility: "visible",
      duration: 0.2,
    });
  }, []);

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
      {selectedMenu === MENU_SELECTION[0] ? (
        <HomeworkEnhancedPage />
      ) : (
        <HandsonPage />
      )}
    </div>
  );
}
