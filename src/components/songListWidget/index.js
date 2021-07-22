/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import SongCard from "./songCard";
import SearchBar from "./searchBar";
import TableHeader from "./tableHeader";

export default function SongList(props) {
  const {
    playlist,
    currentlyPlaying,
    changeSongHandler,
    inputValue,
    inputChangeHandler,
    searchButtonHandler,
    searchState,
  } = props;

  const containerStyle = css`
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
    <div css={containerStyle}>
      {searchState && (
        <SearchBar
          inputValue={inputValue}
          inputChangeHandler={inputChangeHandler}
          searchButtonHandler={searchButtonHandler}
        />
      )}
      <TableHeader />
      {playlist.map((song) => (
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
