/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'utils/theme';

export default function MainMenu({
  menuHandler,
  songData,
  openMenuHandler,
  togglePlaylistSelection,
}) {
  const styles = {
    menuContainer: css`
      width: 100%;
      height: 100%;
    `,
    button: css`
      font-family: 'Noto Sans', sans-serif;
      font-size: ${FONTS.CONTENT};
      color: ${COLORS.TEXT_BRIGHT};
      cursor: default;

      :hover {
        color: ${COLORS.PRIMARY};
      }
    `,
  };

  return (
    <section css={styles.menuContainer}>
      <p id="play" css={styles.button} onClick={(e) => menuHandler(e, songData)}>
        play
      </p>
      <p css={styles.button} onClick={togglePlaylistSelection}>
        add to playlist
      </p>
      <p css={styles.button} onClick={() => openMenuHandler(songData.id)}>
        Close
      </p>
    </section>
  );
}
