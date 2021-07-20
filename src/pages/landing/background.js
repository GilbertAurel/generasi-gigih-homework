/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import IMAGES from "assets/images";
import gsap from "gsap";

function Background() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      delay: 1.4,
      duration: 0.6,
    });
  }, []);

  return (
    <img
      ref={imageRef}
      src={IMAGES.HOME_BG}
      alt="Album img"
      css={css`
        height: 110vh;
        position: absolute;
        top: 10rem;
        right: -25rem;
        opacity: 0.1;
        filter: blur(1.25rem);
        object-fit: contain;
      `}
    />
  );
}

export default Background;
