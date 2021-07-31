/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect } from "react";
import gsap from "gsap";
import { COLORS, FONTS } from "utils/theme";

export default function Footer() {
  useEffect(() => {
    gsap.from("#text-footer", {
      x: -100,
      delay: 1,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
    });
  }, []);

  const styles = {
    container: css`
      grid-column: 2/4;
      grid-row: 5/6;
      font-family: "Noto Sans", sans-serif;
      font-weight: 500;
      font-size: ${FONTS.CONTENT};
      color: ${COLORS.TEXT_BRIGHT};
    `,
  };

  return (
    <div css={styles.container}>
      <p id="text-footer">Simple web app for GenerasiGigih</p>
      <p id="text-footer">Developed with love.</p>
    </div>
  );
}
