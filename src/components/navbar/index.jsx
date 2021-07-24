/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";

import { COLORS, FONTS } from "constants/theme";
import { APP_NAME } from "constants/dummyData";
import Menu from "./menu";

export default function Index(props) {
  const navbarRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .to(navbarRef.current, {
        visibility: "visible",
        duration: 0.2,
        delay: 0.5,
      })
      .from(navbarRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.6,
        ease: Power3.easeInOut,
      });
  }, []);

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
      visibility: hidden;

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
      <h1 css={styles.logo}>{APP_NAME}</h1>
      <Menu {...props} />
    </div>
  );
}
