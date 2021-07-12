/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

import { MENU_SELECTION, ALBUM_DATA } from "constants/dummyData";
import Navbar from "components/navbar";
import HandsonPage from "pages/handson";
import { COLORS } from "constants/theme";

function App() {
  const containerRef = useRef(null);
  const [selectedMenu, setSelectedMenu] = useState(MENU_SELECTION[0]);

  const selectMenuHandler = (menu) => {
    setSelectedMenu(menu);
    console.log(menu);
  };

  useEffect(() => {
    gsap.to(containerRef.current, {
      visibility: "visible",
      duration: 0.2,
    });
  }, []);

  const HomeworkPage = () => {
    return (
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
        `}
      >
        <h1>desc</h1>
        <img
          src={ALBUM_DATA.album.images[0].url}
          alt="Album img"
          css={css`
            height: 100px;
            width: 100px;
          `}
        />
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      css={css`
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: 120px 1fr;
        background-color: ${COLORS.BG_DARK};
        visibility: hidden;
      `}
    >
      <Navbar
        selectedMenu={selectedMenu}
        selectMenuHandler={selectMenuHandler}
      />
      {selectedMenu === MENU_SELECTION[0] ? <HomeworkPage /> : <HandsonPage />}
    </div>
  );
}

export default App;
