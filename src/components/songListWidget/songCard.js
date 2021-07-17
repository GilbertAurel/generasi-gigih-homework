/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "constants/theme";

export default function SongCard({ songData, changeSongHandler, selected }) {
  return (
    <div
      css={css`
        padding: 2rem 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid ${selected ? COLORS.PRIMARY : COLORS.BRIGHT};
        border-radius: 1.25rem;
        gap: 1rem;

        img {
          height: 5rem;
          width: 5rem;
          object-fit: cover;
        }
      `}
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
          color: ${COLORS.TEXT_BRIGHT};
        `}
      >
        {songData.artists[0].name} - {songData.name}
      </p>
      <button onClick={() => changeSongHandler(songData)}>select</button>
    </div>
  );
}
