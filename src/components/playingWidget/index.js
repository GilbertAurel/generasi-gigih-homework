/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import SongDetails from "./details";
import SongImage from "./image";
import Tracker from "./tracker";

export default function PlayingCard({ currentlyPlaying }) {
  const [playSong, setPlaySong] = useState("PLAY");

  const playPauseHandler = () => {
    if (playSong === "PAUSE") return setPlaySong("PLAY");
    setPlaySong("PAUSE");
  };

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 8rem 1fr;
        grid-template-rows: 10rem 5rem;
        column-gap: 1rem;
      `}
    >
      <SongImage imageUrl={currentlyPlaying.album.images[0].url} />
      <SongDetails
        artist={currentlyPlaying.artists[0].name}
        album={currentlyPlaying.album.name}
        song={currentlyPlaying.name}
      />
      <Tracker playPauseHandler={playPauseHandler} icon={playSong} />
    </div>
  );
}
