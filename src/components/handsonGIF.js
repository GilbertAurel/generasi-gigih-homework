/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HandsonGIF() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
    });
  }, []);

  return (
    <img
      ref={imageRef}
      src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"
      alt="running megaman"
      css={css`
        padding: 100px;
        justify-self: center;
      `}
    />
  );
}
