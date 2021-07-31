/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "utils/theme";

export default function PlayingDetails({ artist, album, song }) {
  const styles = {
    container: css`
      align-self: center;
      overflow: hidden;

      p {
        margin: 0.2rem;
        padding: 0;
        font-family: "Noto Sans", sans-serif;
        font-size: ${FONTS.CONTENT};
        cursor: default;
        color: ${COLORS.TEXT_BRIGHT};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      p:first-of-type {
        margin-bottom: 1rem;
        font-weight: 700;
        color: ${COLORS.PRIMARY};
      }
    `,
  };

  return (
    <div css={styles.container}>
      <p>Now playing: </p>
      <p>
        {artist} - {album}
      </p>
      <p>{song}</p>
    </div>
  );
}
