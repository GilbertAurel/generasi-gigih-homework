/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'utils/theme';
import { CircularProgress } from '@material-ui/core';

export default function LoadingSpinner({ type }) {
  const styles = {
    loading: css`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
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
      {type === 'loading' && <CircularProgress color="primary" size={16} />}
      <p>{label[type]}</p>
    </div>
  );
}
