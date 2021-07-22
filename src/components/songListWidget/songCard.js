/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "constants/theme";

import ICONS from "assets/icons";

export default function SongCard({ songData, changeSongHandler, selected }) {
  const duration =
    Math.round((songData.duration_ms * 0.0000166667 + Number.EPSILON) * 100) /
    100;

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 10% 40% 25% 10% auto;
        align-items: center;
        gap: 1rem;
        z-index: 1000;

        img {
          height: 3rem;
          width: 3rem;
          object-fit: cover;
        }

        p {
          flex: 1;
          margin: 0;
          padding: 0;
          font-family: "Noto Sans", sans-serif;
          font-size: ${FONTS.CONTENT};
          cursor: default;
          color: ${selected ? COLORS.PRIMARY : COLORS.TEXT_BRIGHT};
        }
      `}
      onClick={() => changeSongHandler(songData)}
    >
      <img src={songData.album.images[2].url} alt="" />
      <p>{songData.name}</p>
      <p>{songData.artists[0].name}</p>
      <p>{duration}</p>
      <img
        src={ICONS.MORE}
        alt="more icon"
        css={css`
          scale: 0.4;
          transform: scale(0.4);
        `}
      />
    </div>
  );
}
