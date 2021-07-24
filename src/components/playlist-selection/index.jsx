/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "constants/theme";
import PlaylistCard from "./playlistCard";

export default function Index(props) {
  const {
    playlists,
    selectedPlaylist,
    selectPlaylistHandler,
    searchButtonToggle,
  } = props;

  const styles = {
    container: css`
      display: grid;
      grid-template-rows: repeat(auto-fill, 1fr);
      grid-auto-rows: min-content;
      gap: 1rem;
      z-index: 1000;
    `,
    header: css`
      display: flex;
      flex-direction: row;
      gap: 1rem;

      h1:nth-of-type(1) {
        margin: 0;
        padding: 0;
        font-family: "Noto Sans", sans-serif;
        font-size: ${FONTS.BODY};
        color: ${COLORS.PRIMARY};
      }
    `,
    searchButton: css`
      margin: 0;
      padding: 0;
      font-family: "Noto Sans", sans-serif;
      font-size: ${FONTS.BODY};
      font-weight: 500;
      color: ${COLORS.GRAY};
      cursor: pointer;
    `,
  };

  return (
    <div css={styles.container}>
      <div css={styles.header}>
        <h1>My Playlist</h1>
        <h1
          css={styles.searchButton}
          onClick={() => searchButtonToggle({ state: true })}
        >
          search
        </h1>
      </div>
      {playlists.map((playlist, index) => (
        <PlaylistCard
          key={index}
          playlistData={playlist}
          selectPlaylistHandler={selectPlaylistHandler}
          selectedPlaylist={selectedPlaylist}
        />
      ))}
    </div>
  );
}
