/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'utils/theme';
import { useState } from 'react';

import MainMenu from './_components/MainMenu';
import PlaylistSelections from './_components/PlaylistSelections';

export default function Menu({ menuHandler, songData, addSongToPlaylist, openMenuHandler }) {
  const [openPlaylistsSelection, setOpenPlaylistsSelection] = useState(false);

  const togglePlaylistSelection = () => setOpenPlaylistsSelection((prevState) => !prevState);

  const styles = {
    container: css`
      position: absolute;
      top: 100%;
      right: 0;
      background-color: ${COLORS.FROSTED_DARK};
      z-index: 1000;
    `,
    innerContainer: css`
      width: 12rem;
      padding: 0 2rem;
      position: relative;
    `,
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
    <div css={styles.container}>
      <div css={styles.innerContainer}>
        {openPlaylistsSelection ? (
          <PlaylistSelections
            songData={songData}
            addSongToPlaylist={addSongToPlaylist}
            togglePlaylistSelection={togglePlaylistSelection}
          />
        ) : (
          <MainMenu
            menuHandler={menuHandler}
            togglePlaylistSelection={togglePlaylistSelection}
            openMenuHandler={openMenuHandler}
            songData={songData}
          />
        )}
      </div>
    </div>
  );
}
