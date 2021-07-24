/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "constants/theme";

export default function Menu() {
  return (
    <div
      css={css`
        padding: 0 2rem;
        position: absolute;
        top: 100%;
        right: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background-color: ${COLORS.FROSTED_DARK};
        backdrop-filter: blur(5px);
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
        z-index: 1000;

        P {
          font-family: "Noto Sans", sans-serif;
          font-size: ${FONTS.CONTENT};
          color: ${COLORS.TEXT_BRIGHT};
          cursor: default;

          :hover {
            color: ${COLORS.PRIMARY};
          }
        }
      `}
    >
      <p>play</p>
      <p>add to playlist</p>
      <p>more info</p>
    </div>
  );
}
