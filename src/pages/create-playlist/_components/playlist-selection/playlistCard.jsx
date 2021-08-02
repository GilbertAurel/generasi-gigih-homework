/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useSelector } from 'react-redux';
import { COLORS, FONTS } from 'utils/theme';

export default function PlaylistCard({ selectPlaylistHandler, playlistData }) {
  const selectedPlaylist = useSelector((store) => store.playlistState.currentPlaylist);

  const styles = {
    container: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      font-family: 'Noto Sans', sans-serif;
      font-size: ${FONTS.CONTENT};

      img {
        height: 2rem;
        width: 2rem;
      }
    `,
  };

  const playlist = {
    image: playlistData.images[0]?.url,
    name: playlistData.name,
    id: playlistData.id,
  };

  return (
    <div
      onClick={() => selectPlaylistHandler(playlistData)}
      css={styles.container}
      role="button"
      tabIndex={0}
    >
      <img src={playlist.image} alt="playlist" />
      <p
        css={css`
          color: ${selectedPlaylist === playlist.id ? COLORS.PRIMARY : COLORS.TEXT_BRIGHT};
          :hover {
            color: ${COLORS.PRIMARY};
          }
        `}
      >
        {playlist.name}
      </p>
    </div>
  );
}
