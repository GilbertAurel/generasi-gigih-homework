/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

export default function PlayingImage({ imageUrl }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 0.6,
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
        gap: 30px;
      `}
    >
      <img
        src={imageUrl}
        alt="Album img"
        css={css`
          height: 8rem;
          width: 8rem;
          justify-self: center;
        `}
      />
    </div>
  );
}
