/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

import { ALBUM_DATA } from "constants/dummyData";

import FrostedBackground from "components/frostedBackground";
import SongDetails from "components/songDetails";
import SongAlbum from "components/songAlbum";

export default function App() {
  const containerRef = useRef(null);
  const [playSong, setPlaySong] = useState("PLAY");

  const playPauseHandler = () => {
    if (playSong === "PAUSE") return setPlaySong("PLAY");
    setPlaySong("PAUSE");
  };

  useEffect(() => {
    gsap.to(containerRef.current, {
      visibility: "visible",
      duration: 0.2,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      css={css`
        padding: 0 20%;
        grid-row: 1/3;
        grid-column: 1/2;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
      `}
    >
      <FrostedBackground imageUrl={ALBUM_DATA.album.images[0].url} />
      <div
        css={css`
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
        `}
      >
        <SongDetails
          artist={ALBUM_DATA.artists[0].name}
          album={ALBUM_DATA.album.name}
          song={ALBUM_DATA.name}
        />
        <SongAlbum
          imageUrl={ALBUM_DATA.album.images[0].url}
          playPauseHandler={playPauseHandler}
          icon={playSong}
        />
      </div>
    </div>
  );
}
