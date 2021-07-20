/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import { SONG_DATA } from "constants/dummyData";

import PageLayout from "components/pageLayout";
import SongListWidget from "components/songListWidget";
import PlayingWidget from "components/playingWidget";

export default function App() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(SONG_DATA[0]);

  const changeSongHandler = (song) => {
    setCurrentlyPlaying(song);
  };

  return (
    <PageLayout>
      <div
        css={css`
          width: 100%;
          margin: 10rem 0;
          display: grid;
          grid-template-columns: 25rem 1fr;
          align-items: flex-start;
          gap: 5rem;

          @media (max-width: 1600px) {
            grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
          }
        `}
      >
        <PlayingWidget currentlyPlaying={currentlyPlaying} />
        <SongListWidget
          songData={SONG_DATA}
          currentlyPlaying={currentlyPlaying}
          changeSongHandler={changeSongHandler}
        />
      </div>
    </PageLayout>
  );
}
