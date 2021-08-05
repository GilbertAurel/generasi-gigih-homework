/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from '@material-ui/lab';

import FrostedBackground from 'components/frostedBackground';
import Details from './details';
import Tracker from './tracker';

export default function PlayingCard() {
  const currentSong = useSelector((store) => store.playlistState.currentlyPlaying);
  const [togglePlay, setTogglePlay] = useState('PLAY');
  const [currentlyPlaying, setCurrentlyPlaying] = useState();

  useEffect(() => {
    if (currentSong) {
      setCurrentlyPlaying(currentSong);
    }
  }, [currentSong]);

  const playPauseHandler = () =>
    togglePlay === 'PAUSE' ? setTogglePlay('PLAY') : setTogglePlay('PAUSE');

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

  if (currentlyPlaying) {
    const song = {
      background: currentlyPlaying.album.images[2].url,
      image: currentlyPlaying.album.images[1].url,
      title: currentlyPlaying.name,
      artist: currentlyPlaying.artists[0].name,
      album: currentlyPlaying.album.name,
    };

    return (
      <div css={styles.container}>
        <img src={song.image} alt="Album img" css={styles.albumImage} />
        <Details artist={song.artist} album={song.album} song={song.title} />
        <Tracker playPauseHandler={playPauseHandler} icon={togglePlay} />
        <FrostedBackground imageUrl={song.background} />
      </div>
    );
  }

  return (
    <div css={styles.container}>
      <Skeleton animation="wave" variant="rect" width={128} height={128} />
      <Details artist="" album="" song="No current song" />
      <Tracker playPauseHandler={playPauseHandler} icon={togglePlay} />
      <FrostedBackground imageUrl="" />
    </div>
  );
}
