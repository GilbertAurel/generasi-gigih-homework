/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect } from 'react';
import { COLORS, FONTS } from 'utils/theme';
import gsap from 'gsap';

function Title({ loginHandler }) {
  useEffect(() => {
    gsap
      .timeline()
      .from('#headline', {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
      })
      .from(['#name', '#button'], {
        opacity: 0,
        duration: 0.6,
      });
  }, []);

  const styles = {
    container: css`
      display: flex;
      flex-direction: column;
      grid-column: 2/7;
      grid-row: 2/5;
      z-index: 1000;
      font-family: 'Noto Sans', sans-serif;
    `,
    appName: css`
      margin: 0;
      font-weight: 700;
      font-size: ${FONTS.MENU};
      color: ${COLORS.PRIMARY};
    `,
    headline: css`
      margin: 0;
      font-weight: 500;
      font-size: ${FONTS.HEADING};
      color: ${COLORS.TEXT_BRIGHT};
    `,
    button: css`
      width: 15rem;
      margin-top: 2rem;
      padding: 0.5rem 4rem;
      box-sizing: border-box;
      background-color: ${COLORS.PRIMARY};
      border: none;
      border-radius: 1rem;
      font-weight: 700;
      font-size: ${FONTS.BODY};
      color: ${COLORS.BG_DARK};
    `,
  };

  return (
    <div css={styles.container}>
      <p id="name" css={styles.appName}>
        My Spotify
      </p>
      <h1 id="headline" css={styles.headline}>
        Free Music Everyday
      </h1>
      <h1 id="headline" css={styles.headline}>
        Just For You.
      </h1>
      <button id="button" css={styles.button} onClick={loginHandler}>
        Sign in
      </button>
    </div>
  );
}

export default Title;
