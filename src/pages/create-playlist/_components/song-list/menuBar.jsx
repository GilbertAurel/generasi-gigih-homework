/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useSelector } from 'react-redux';
import { COLORS, FONTS } from 'utils/theme';
import { useState } from 'react';

export default function Menu({ menuHandler, songData, addSongToPlaylist, openMenuHandler }) {
  const playlists = useSelector((store) => store.playlistState.playlists);
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

  const MainMenu = () => {
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
  };

  const PlaylistSelections = () => {
    return (
      <section css={styles.menuContainer}>
        {playlists?.map((playlist) => (
          <p
            key={playlist.id}
            css={styles.button}
            onClick={() => addSongToPlaylist(playlist.id, songData.uri)}
          >
            {playlist.name}
          </p>
        ))}
        <p css={styles.button} onClick={togglePlaylistSelection}>
          Back
        </p>
      </section>
    );
  };

  return (
    <div css={styles.container}>
      <div css={styles.innerContainer}>
        {openPlaylistsSelection ? <PlaylistSelections /> : <MainMenu />}
      </div>
    </div>
  );
}
