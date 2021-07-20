/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect } from "react";
import { COLORS, FONTS } from "constants/theme";
import gsap from "gsap";

import { SPOTIFY_AUTH_URL } from "constants/urls";

function Title() {
  useEffect(() => {
    gsap
      .timeline()
      .from("#headline", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
      })
      .from(["#name", "#button"], {
        opacity: 0,
        duration: 0.6,
      });
  }, []);

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    grid-column: 2/7;
    grid-row: 2/5;
    z-index: 1000;

    p {
      margin: 0;
      font-family: "Noto Sans", sans-serif;
      font-weight: 700;
      font-size: ${FONTS.MENU};
      color: ${COLORS.PRIMARY};
    }

    h1 {
      margin: 0;
      font-family: "Noto Sans", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: ${FONTS.HEADING};
      color: ${COLORS.TEXT_BRIGHT};
    }

    a {
      width: 15rem;
      margin-top: 2rem;
      box-sizing: border-box;
      padding: 0.5rem 4rem;
      background-color: ${COLORS.PRIMARY};
      border-radius: 1rem;

      font-family: "Noto Sans", sans-serif;
      font-weight: 700;
      font-size: ${FONTS.BODY};
      color: ${COLORS.BG_DARK};
      text-align: center;
      text-decoration: none;
    }
  `;

  return (
    <div css={containerStyle}>
      <p id="name">My Spotify</p>
      <h1 id="headline">Free Music Everyday</h1>
      <h1 id="headline">Just For You.</h1>
      <a id="button" href={SPOTIFY_AUTH_URL}>
        Sign in
      </a>
    </div>
  );
}

export default Title;
