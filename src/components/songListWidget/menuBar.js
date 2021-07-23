/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS } from "constants/theme";

export default function Menu() {
  return (
    <div
      css={css`
        position: absolute;
        top: 100%;
        right: 0;
        background-color: ${COLORS.BG_DARK};
        color: ${COLORS.TEXT_BRIGHT};
      `}
    >
      <p>play</p>
      <p>add to playlist</p>
      <p>more info</p>
    </div>
  );
}
