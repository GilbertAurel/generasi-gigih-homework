/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "constants/theme";

export default function SongCard({ albumData }) {
  return (
    <div
      css={css`
        height: 100px;
        width: 50%;
        padding: 20px 40px;
        margin: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 50px;
        border: 1px solid ${COLORS.BRIGHT};
        border-radius: 20px;

        img {
          height: 80px;
          width: 80px;
          object-fit: cover;
        }
      `}
    >
      <img src={albumData.album.images[0].url} alt="" />
      <p
        css={css`
          flex: 1;
          margin: 0;
          padding: 0;
          font-family: "Noto Sans", sans-serif;
          font-size: ${FONTS.BODY}px;
          cursor: default;
          color: ${COLORS.TEXT_BRIGHT};
        `}
      >
        {albumData.artists[0].name} - {albumData.name}
      </p>
      <button>select</button>
    </div>
  );
}
