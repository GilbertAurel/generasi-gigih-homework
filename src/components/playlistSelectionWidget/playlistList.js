/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "constants/theme";

export default function PlaylistList({
  playlists,
  selectedPlaylist,
  setSelectedPlaylist,
  setSearchState,
}) {
  const selectPlaylistHandler = (playlist) => {
    setSearchState(false);
    setSelectedPlaylist(playlist);
  };

  return playlists.map((playlist, index) => (
    <div
      key={index}
      onClick={() => selectPlaylistHandler(playlist)}
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        cursor: pointer;

        img {
          height: 2rem;
          width: 2rem;
        }

        p {
          margin: 0;
          padding: 0;
          font-family: "Noto Sans", sans-serif;
          font-size: ${FONTS.CONTENT};
          color: ${selectedPlaylist.name === playlist.name
            ? COLORS.PRIMARY
            : COLORS.TEXT_BRIGHT};
        }
      `}
    >
      <img src={playlist.data[0]?.album.images[2].url} alt="" />
      <p>{playlist.name}</p>
    </div>
  ));
}
