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
    songs,
    currentlyPlaying,
    changeSongHandler,
    inputValue,
    inputChangeHandler,
    searchButtonHandler,
    openSearchBar,
  } = props;

  const menuHandler = (id) => setToggleMenu(toggleMenu === id ? "" : id);

  const styles = {
    container: css`
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
    `,
  };

  return (
    <div css={styles.container}>
      {openSearchBar && (
        <SearchBar
          inputValue={inputValue}
          inputChangeHandler={inputChangeHandler}
          searchButtonHandler={searchButtonHandler}
        />
      )}
      <Header />
      {songs.map((song) => (
        <SongCard
          key={song.id}
          songData={song}
          changeSongHandler={changeSongHandler}
          selected={song.id === currentlyPlaying.id}
          menuHandler={menuHandler}
          openMenu={song.id === toggleMenu}
        />
      ))}
    </div>
  );
}
