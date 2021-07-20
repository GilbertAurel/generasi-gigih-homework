/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "constants/theme";

export default function SongCard({ songData, changeSongHandler, selected }) {
  return (
    <div
      css={css`
        padding: 1rem 0;
        grid-column: 1/5;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        z-index: 1000;

        img {
          height: 3rem;
          width: 3rem;
          object-fit: cover;
        }
      `}
      onClick={() => changeSongHandler(songData)}
    >
      <img src={songData.album.images[0].url} alt="" />
      <p
        css={css`
          flex: 1;
          margin: 0;
          padding: 0;
          font-family: "Noto Sans", sans-serif;
          font-size: ${FONTS.CONTENT};
          cursor: default;
          color: ${selected ? COLORS.PRIMARY : COLORS.BRIGHT};
        `}
      >
        {songData.artists[0].name} - {songData.name}
      </p>
    </div>
  );
}
