/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import IMAGES from "assets/images";

export default function Background() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      delay: 1.4,
      duration: 0.6,
    });
  }, []);

  const styles = {
    background: css`
      height: 110vh;
      position: absolute;
      top: 10rem;
      right: -25rem;
      opacity: 0.1;
      filter: blur(1.25rem);
      object-fit: contain;
    `,
  };

  return (
    <img
      ref={imageRef}
      src={IMAGES.HOME_BG}
      alt="Album img"
      css={styles.background}
    />
  );
}
