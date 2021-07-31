/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import gsap, { Power3 } from 'gsap';
import { useRef, useEffect } from 'react';

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

  const styles = {
    image: css`
      height: 110vh;
      position: absolute;
      top: 4rem;
      left: -1.25rem;
      opacity: 0.1;
      filter: blur(1.25rem);
      object-fit: contain;
    `,
  };

  return <img ref={imageRef} src={imageUrl} alt="Album img" css={styles.image} />;
}
