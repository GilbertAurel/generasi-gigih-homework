/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import { COLORS } from "constants/theme";

export default function skeleton({ type }) {
  const loading = keyframes`
    0% {
      transform: translateX(-150%);
    }
    50% {
      transform: translateX(-60%);
    }
    100% {
      transform: translateX(150%);
    }
`;

  const styles = {
    gif: css`
      min-height: 20rem;
      justify-self: stretch;
      align-self: stretch;
      position: relative;
      background-color: ${COLORS.GRAY};
      border-radius: 10px;
      text-decoration: none;
      overflow: hidden;
    `,
    innerContainer: css`
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      animation: ${loading} 1s infinite;
    `,
    shimmer: css`
      height: 100%;
      width: 50%;
      background-color: rgba(255, 255, 255, 0.2);
      transform: skewX(-20deg);
    `,
  };

  return [1, 2, 3, 4, 5, 6].map((item, index) => (
    <div key={`${item}-${index}`} css={styles[type]}>
      <div css={styles.innerContainer}>
        <div css={styles.shimmer} />
      </div>
    </div>
  ));
}
