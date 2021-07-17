/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import SongCard from "./songCard";

export default function SongList({
  songData,
  currentlyPlaying,
  changeSongHandler,
}) {
  return (
    <div
      css={css`
        display: grid;
        grid-template-rows: repeat(auto-fill, 1fr);
        gap: 2rem;
      `}
    >
      {songData.map((song) => (
        <SongCard
          key={song.id}
          songData={song}
          changeSongHandler={changeSongHandler}
          selected={currentlyPlaying.id === song.id}
        />
      ))}
    </div>
  );
}
