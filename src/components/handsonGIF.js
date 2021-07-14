/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { COLORS } from "constants/theme";

export default function HandsonGIF({ url, title }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      css={css`
        height: 500px;
        width: 500px;
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <img
        src={url}
        alt="gif"
        css={css`
          height: 300px;
          width: 300px;
          object-fit: contain;
          justify-self: center;
        `}
      />
      <p
        css={css`
          margin: o;
          padding: 0;
          color: ${COLORS.TEXT_BRIGHT};
        `}
      >
        {title}
      </p>
    </div>
  );
}
