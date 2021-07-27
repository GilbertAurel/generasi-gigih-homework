/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "constants/theme";

export default function Header({ searchFormButtonHandler }) {
  const styles = {
    container: css`
      display: flex;
      flex-direction: row;
      gap: 1rem;

      h1:nth-of-type(1) {
        margin: 0;
        padding: 0;
        font-size: ${FONTS.BODY};
        color: ${COLORS.PRIMARY};
      }
    `,
    searchButton: css`
      margin: 0;
      padding: 0;
      font-weight: 500;
      font-size: ${FONTS.BODY};
      color: ${COLORS.GRAY};
      cursor: pointer;
    `,
  };

  return (
    <div css={styles.container}>
      <h1>My Playlist</h1>
      <h1 css={styles.searchButton} onClick={searchFormButtonHandler}>
        search
      </h1>
    </div>
  );
}
