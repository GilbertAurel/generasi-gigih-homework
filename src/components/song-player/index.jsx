/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FrostedBackground } from "components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Details from "./details";
import Tracker from "./tracker";

export default function PlayingCard({ currentlyPlaying }) {
  const initialPlaying = useSelector(
    (store) => store.playlistState.currentlyPlaying
  );
  const [togglePlay, setTogglePlay] = useState("PLAY");
  const [playing, setPlaying] = useState();

  useEffect(() => {
    if (initialPlaying) {
      setPlaying(initialPlaying);
    }
  }, [initialPlaying]);

  useEffect(() => {
    setPlaying(currentlyPlaying);
  }, [currentlyPlaying]);

  const playPauseHandler = () =>
    togglePlay === "PAUSE" ? setTogglePlay("PLAY") : setTogglePlay("PAUSE");

  const song = {
    background: playing?.album.images[2].url,
    image: playing?.album.images[1].url,
    title: playing?.name,
    artist: playing?.artists[0].name,
    album: playing?.album.name,
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

  if (!playing) return <h1>loading</h1>; //TODO: Put skeleton here

  return (
    <div css={styles.container}>
      <img src={song.image} alt="Album img" css={styles.albumImage} />
      <Details artist={song.artist} album={song.album} song={song.title} />
      <Tracker playPauseHandler={playPauseHandler} icon={togglePlay} />
      <FrostedBackground imageUrl={song.background} />
    </div>
  );
}
