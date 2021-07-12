/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";

import { COLORS, FONTS } from "constants/theme";
import { MENU_SELECTION, APP_NAME } from "constants/dummyData";

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
          gap: 80px;
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
              font-size: ${FONTS.BODY}px;
              color: ${menu === selectedMenu
                ? COLORS.BTN_ACTIVE_DARK
                : COLORS.BTN_NOT_ACTIVE_DARK};
              cursor: pointer;
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
      <h1
        css={css`
          margin: 0;
          padding: 0;
          font-family: "Noto Sans", sans-serif;
          font-size: ${FONTS.MENU}px;
          color: ${COLORS.TEXT_BRIGHT};
          cursor: default;
        `}
      >
        {APP_NAME}
      </h1>
    );
  };

  return (
    <div
      ref={navbarRef}
      css={css`
        padding: 0 10%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: ${COLORS.BG_DARK};
        visibility: hidden;
      `}
    >
      <RenderAppName />
      <RenderMenu />
    </div>
  );
}
