/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "constants/theme";
import gsap from "gsap";
import { useEffect } from "react";

export default function SongDetails({ artist, album, song }) {
  useEffect(() => {
    gsap.from("#text", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
    });
  }, []);

  return (
    <div
      css={css`
        grid-column: 1/2;
        grid-row: 1/2;

        p {
          font-family: "Noto Sans", sans-serif;
          font-size: ${FONTS.BODY}px;
          cursor: default;
          color: ${COLORS.TEXT_BRIGHT};
        }

        p:first-of-type {
          margin-bottom: 30px;
          font-weight: 700;
          color: ${COLORS.PRIMARY};
        }
      `}
    >
      <p>Now playing: </p>
      <p id="text">
        {artist} - {album}
      </p>
      <p id="text">{song}</p>
    </div>
  );
}
