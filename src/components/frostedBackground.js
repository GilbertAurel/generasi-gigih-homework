/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import gsap, { Power3 } from "gsap";
import { useRef, useEffect } from "react";

export default function FrostedBackground({ imageUrl }) {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      duration: 0.6,
      delay: 0.8,
      ease: Power3.easeIn,
    });
  }, []);

  return (
    <img
      ref={imageRef}
      src={imageUrl}
      alt="Album img"
      css={css`
        height: 110vh;
        position: absolute;
        bottom: -20px;
        left: -20px;
        opacity: 0.1;
        filter: blur(20px);
        object-fit: contain;
      `}
    />
  );
}
