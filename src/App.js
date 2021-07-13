/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

import { MENU_SELECTION, ALBUM_DATA } from "constants/dummyData";
import { COLORS, FONTS } from "constants/theme";

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

  const renderPage = () => {
    if (selectedMenu === MENU_SELECTION[0]) return <HomeworkPage />; // real homework page
    if (selectedMenu === MENU_SELECTION[1]) return <HomeworkEnhancedPage />; // facelift version
    return <HandsonPage />;
  };

  const RenderMusicCard = ({ albumData }) => {
    return (
      <div
        css={css`
          height: 100px;
          width: 50%;
          padding: 20px 40px;
          margin: auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 50px;
          border: 1px solid ${COLORS.BRIGHT};
          border-radius: 20px;

          img {
            height: 80px;
            width: 80px;
            object-fit: cover;
          }
        `}
      >
        <img src={albumData.album.images[0].url} alt="" />
        <p
          css={css`
            flex: 1;
            margin: 0;
            padding: 0;
            font-family: "Noto Sans", sans-serif;
            font-size: ${FONTS.BODY}px;
            cursor: default;
            color: ${COLORS.TEXT_BRIGHT};
          `}
        >
          {albumData.artists[0].name} - {albumData.name}
        </p>
        <button>select</button>
      </div>
    );
  };

  // homework page
  const HomeworkPage = () => {
    return (
      <div
        css={css`
          padding: 50px 20%;
          grid-row: 2/3;
          grid-column: 1/2;
        `}
      >
        <RenderMusicCard albumData={ALBUM_DATA} />
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      css={css`
        height: 100vh;
        width: 100vw;
        min-height: 800px;
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
      {renderPage()}
    </div>
  );
}
