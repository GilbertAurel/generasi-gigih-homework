/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'utils/theme';
import ICONS from 'assets/icons';

export default function CreateNewButton({ createNewButtonHandler }) {
  const styles = {
    container: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      font-family: 'Noto Sans', sans-serif;
      font-size: ${FONTS.CONTENT};
      color: ${COLORS.GRAY};
    `,
  };

  return (
    <div css={styles.container} onClick={createNewButtonHandler} role="button" tabIndex={0}>
      <img src={ICONS.ADD} alt="new playlist" />
      <p>Create new playlist</p>
    </div>
  );
}
