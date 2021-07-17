/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS } from "constants/theme";
import ICONS from "assets/icons";

export default function Tracker({ playPauseHandler, icon }) {
  const RenderTracker = () => {
    return (
      <div
        css={css`
          height: 0.25rem;
          width: 100%;
          border-radius: 20px;
          position: relative;
        `}
      >
        <div
          css={css`
            height: 100%;
            width: 100%;
            background-color: ${COLORS.BRIGHT};
            border-radius: inherit;
          `}
        />
      </div>
    );
  };

  const RenderButtons = () => {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: row;
          gap: 0.6rem;

          img {
            height: 2rem;
            width: 2rem;
            cursor: pointer;
          }
        `}
      >
        <img src={ICONS.PREV} alt="prev button" />
        <img src={ICONS[icon]} onClick={playPauseHandler} alt="play button" />
        <img src={ICONS.NEXT} alt="next button" />
      </div>
    );
  };

  return (
    <div
      css={css`
        grid-column: 1/3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        z-index: 1;
      `}
    >
      <RenderTracker />
      <RenderButtons />
    </div>
  );
}
