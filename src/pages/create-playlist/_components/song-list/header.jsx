/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "utils/theme";

import ICONS from "assets/icons";

export default function TableHeader() {
  const styles = {
    container: css`
      display: grid;
      grid-template-columns: 10% 40% 25% 10% auto;
      grid-template-areas: "image title artist length menu";
      align-items: center;
      gap: 1rem;
      border-bottom: 0.5px solid ${COLORS.GRAY};

      p:nth-of-type(1) {
        grid-area: title;
      }
      p:nth-of-type(2) {
        grid-area: artist;
      }

      p {
        flex: 1;
        margin: 0;
        padding: 0;
        font-family: "Noto Sans", sans-serif;
        font-size: ${FONTS.CONTENT};
        cursor: default;
        color: ${COLORS.GRAY};
      }

      img {
        grid-area: length;
        transform: scale(0.65);
      }
    `,
  };

  return (
    <div css={styles.container}>
      <p>Title</p>
      <p>Artist</p>
      <img src={ICONS.TIMER} alt="timer icon" />
    </div>
  );
}
