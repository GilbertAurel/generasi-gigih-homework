/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import SongCard from "./songCard";
import SearchBar from "./searchBar";
import Header from "./header";

export default function SongList(props) {
  const [toggleMenu, setToggleMenu] = useState("");

  const {
    playlist,
    currentlyPlaying,
    changeSongHandler,
    inputValue,
    inputChangeHandler,
    searchButtonHandler,
    openSearchBar,
  } = props;

  const styles = css`
    grid-column: 2/3;
    grid-row: 1/3;
    overflow-y: scroll;
    display: grid;
    grid-template-rows: repeat(auto-fill, 3rem);
    row-gap: 0.8rem;
    scrollbar-width: none;
    z-index: 1000;

    ::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <div css={styles}>
      {openSearchBar && (
        <SearchBar
          inputValue={inputValue}
          inputChangeHandler={inputChangeHandler}
          searchButtonHandler={searchButtonHandler}
        />
      )}
      <Header />
      {playlist.map((song) => (
        <SongCard
          key={song.id}
          songData={song}
          changeSongHandler={changeSongHandler}
          selected={song.id === currentlyPlaying.id}
          setToggleMenu={setToggleMenu}
          openMenu={song.id === toggleMenu}
        />
      ))}
    </div>
  );
}
