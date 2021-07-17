/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HandsonGIF({ url }) {
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
          height: 19rem;
          width: 19rem;
          object-fit: contain;
          justify-self: center;
        `}
      />
    </div>
  );
}
