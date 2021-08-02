/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'utils/theme';

export default function LoadingSpinner({ type }) {
  const styles = {
    loading: css`
      display: grid;
      justify-items: center;
      align-items: center;
      font-family: 'Noto Sans', sans-serif;
      font-size: ${FONTS.CONTENT};
      color: ${COLORS.GRAY};
    `,
    noSong: css`
      display: grid;
      justify-items: center;
      align-items: center;
      font-family: 'Noto Sans', sans-serif;
      font-size: ${FONTS.CONTENT};
      color: ${COLORS.GRAY};
    `,
  };

  const label = {
    loading: 'Loading ...',
    noSong: 'Playlist empty',
  };

  return (
    <div css={styles[type]}>
      <p>{label[type]}</p>
    </div>
  );
}
