/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import Details from "./details";
import Tracker from "./tracker";

export default function PlayingCard({ currentlyPlaying }) {
  const [playSong, setPlaySong] = useState("PLAY");

  const playPauseHandler = () =>
    playSong === "PAUSE" ? setPlaySong("PLAY") : setPlaySong("PAUSE");

  const song = {
    image: currentlyPlaying.album.images[0].url,
    title: currentlyPlaying.name,
    artist: currentlyPlaying.artists[0].name,
    album: currentlyPlaying.album.name,
  };

  const styles = {
    container: css`
      max-height: 12rem;
      grid-column: 1/2;
      grid-row: 1/2;
      display: grid;
      grid-template: 8rem auto / 8rem auto;
      gap: 1rem;
    `,
    albumImage: css`
      grid-column: 1/2;
      grid-row: 1/2;
      height: 8rem;
      width: 8rem;
      object-fit: contain;
    `,
  };

  return (
    <div css={styles.container}>
      <img src={song.image} alt="Album img" css={styles.albumImage} />
      <Details artist={song.artist} album={song.album} song={song.title} />
      <Tracker playPauseHandler={playPauseHandler} icon={playSong} />
    </div>
  );
}
