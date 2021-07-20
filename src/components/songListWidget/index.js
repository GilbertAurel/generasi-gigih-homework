/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "constants/theme";

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
        grid-template-columns: repeat(4, 1fr);
        row-gap: 0.5rem;
      `}
    >
      <h1
        css={css`
          font-family: "Noto Sans", sans-serif;
          font-size: ${FONTS.BODY};
          color: ${COLORS.TEXT_BRIGHT};
          grid-column: 1/5;
        `}
      >
        Current playlist
      </h1>
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
