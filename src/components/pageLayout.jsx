/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS } from "utils/theme";

export default function PageLayout({ children }) {
  const styles = {
    container: css`
      min-height: 100vh;
      padding: 0 20%;
      display: flex;
      flex-direction: row;
      position: relative;
      overflow: hidden;
      background-color: ${COLORS.BG_DARK};
    `,
  };

  return <div css={styles.container}>{children}</div>;
}
