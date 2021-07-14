/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

import { COLORS } from "constants/theme";
import ICONS from "assets/icons";

export default function SongAlbum({ imageUrl, playPauseHandler, icon }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 0.6,
    });
  }, []);

  const RenderSongTracker = () => {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
        `}
      >
        <div
          css={css`
            height: 5px;
            width: 350px;
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
        <div
          css={css`
            display: flex;
            flex-direction: row;
            gap: 10px;

            img {
              height: 30px;
              width: 30px;
              cursor: pointer;
            }
          `}
        >
          <img src={ICONS.PREV} alt="prev button" />
          <img src={ICONS[icon]} onClick={playPauseHandler} alt="play button" />
          <img src={ICONS.NEXT} alt="next button" />
        </div>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      css={css`
        grid-column: 2/3;
        grid-row: 1/2;
        justify-self: flex-end;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
      `}
    >
      <img
        src={imageUrl}
        alt="Album img"
        css={css`
          height: 400px;
          width: 400px;
          justify-self: center;
        `}
      />
      <RenderSongTracker />
    </div>
  );
}
