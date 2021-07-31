/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS } from 'utils/theme';
import ICONS from 'assets/icons';

export default function Tracker({ playPauseHandler, icon }) {
  const styles = {
    container: css`
      grid-column: 1/3;
      grid-row: 2/3;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      z-index: 1;
    `,
    trackerContainer: css`
      height: 0.25rem;
      width: 100%;
      border-radius: 20px;
      position: relative;
    `,
    trackerBody: css`
      height: 100%;
      width: 100%;
      background-color: ${COLORS.BG_BRIGHT};
      border-radius: inherit;
    `,
    buttonsContainer: css`
      display: flex;
      flex-direction: row;
      gap: 0.6rem;

      img {
        height: 2rem;
        width: 2rem;
        cursor: pointer;
      }
    `,
  };

  return (
    <div css={styles.container}>
      <div css={styles.trackerContainer}>
        <div css={styles.trackerBody} />
      </div>
      <div css={styles.buttonsContainer}>
        <img src={ICONS.PREV} alt="prev button" />
        <img src={ICONS[icon]} onClick={playPauseHandler} alt="play button" />
        <img src={ICONS.NEXT} alt="next button" />
      </div>
    </div>
  );
}
