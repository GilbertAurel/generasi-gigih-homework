/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";

import { COLORS, FONTS } from "constants/theme";
import { MENU_SELECTION, APP_NAME } from "constants/dummyData";
import ICONS from "assets/icons";

export default function Navbar({ selectedMenu, selectMenuHandler }) {
  const tl = gsap.timeline();
  const navbarRef = useRef(null);

  useEffect(() => {
    tl.to(navbarRef.current, {
      visibility: "visible",
      duration: 0.2,
      delay: 0.5,
    }).from(navbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.6,
      ease: Power3.easeInOut,
    });
  }, []);

  const RenderMenu = () => {
    return (
      <section
        css={css`
          display: flex;
          flex-direction: row;
          gap: 100px;
        `}
      >
        {MENU_SELECTION.map((menu, index) => (
          <p
            key={index}
            onClick={() => selectMenuHandler(menu)}
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
        ))}
      </section>
    );
  };

  const RenderAppName = () => {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: row;
          cursor: default;

          img {
            height: 40px;
            width: 40px;
            object-fit: contain;
          }
        `}
      >
        <img src={ICONS.LOGO} alt="app logo" />
        <h1
          css={css`
            margin: 0;
            padding: 0;
            font-family: "Noto Sans", sans-serif;
            font-size: ${FONTS.MENU};
            color: ${COLORS.PRIMARY};
          `}
        >
          {APP_NAME}
        </h1>
      </div>
    );
  };

  return (
    <div
      ref={navbarRef}
      css={css`
        grid-row: 1/2;
        grid-column: 1/2;
        padding: 0 20%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
        visibility: hidden;
      `}
    >
      <RenderAppName />
      <RenderMenu />
    </div>
  );
}
