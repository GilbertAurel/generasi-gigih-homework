/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { COLORS } from "constants/theme";
import Title from "./title";
import Footer from "./footer";
import Background from "./background";

export default function Index({ loginHandler }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      visibility: "visible",
      duration: 0.2,
    });
  }, []);

  const styles = {
    container: css`
      min-height: 100vh;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(5, 1fr);
      background-color: ${COLORS.BG_DARK};
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      visibility: hidden;
    `,
  };

  return (
    <div ref={containerRef} css={styles.container}>
      <Title loginHandler={loginHandler} />
      <Footer />
      <Background />
    </div>
  );
}
