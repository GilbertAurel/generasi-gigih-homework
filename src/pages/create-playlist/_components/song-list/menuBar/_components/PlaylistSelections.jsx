/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useSelector } from 'react-redux';
import { COLORS, FONTS } from 'utils/theme';

export default function PlaylistSelections({
  songData,
  addSongToPlaylist,
  togglePlaylistSelection,
}) {
  const playlists = useSelector((store) => store.playlistState.playlists);

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
}
