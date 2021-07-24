/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "constants/theme";

export default function PlaylistCard({
  selectedPlaylist,
  selectPlaylistHandler,
  playlistData,
}) {
  const styles = {
    container: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      font-family: "Noto Sans", sans-serif;
      font-size: ${FONTS.CONTENT};

      img {
        height: 2rem;
        width: 2rem;
      }
    `,
  };

  const playlist = {
    image: playlistData.data[0]?.album.images[2].url,
    name: playlistData.name,
  };

  return (
    <div
      onClick={() => selectPlaylistHandler(playlistData)}
      css={styles.container}
    >
      <img src={playlist.image} alt="playlist image" />
      <p
        css={css`
          color: ${selectedPlaylist.name === playlist.name
            ? COLORS.PRIMARY
            : COLORS.TEXT_BRIGHT};
        `}
      >
        {playlist.name}
      </p>
    </div>
  );
}