/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect } from "react";
import { COLORS, FONTS } from "constants/theme";
import gsap from "gsap";

function Footer() {
  useEffect(() => {
    gsap.from("#text-footer", {
      x: -100,
      delay: 1,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
    });
  }, []);

  const containerStyle = css`
    grid-column: 2/4;
    grid-row: 5/6;

    p {
      font-family: "Noto Sans", sans-serif;
      font-weight: 500;
      font-size: ${FONTS.CONTENT};
      color: ${COLORS.TEXT_BRIGHT};
      text-decoration: none;
    }
  `;

  return (
    <div css={containerStyle}>
      <p id="text-footer">Simple web app for GenerasiGigih</p>
      <p id="text-footer">Developed with love.</p>
    </div>
  );
}

export default Footer;
