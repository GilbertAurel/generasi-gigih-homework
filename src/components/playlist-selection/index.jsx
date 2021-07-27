/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import PlaylistCard from "./playlistCard";
import { PopupForm } from "components";
import CreateNewCard from "./createNewCard";
import Header from "./header";
import { useSelector } from "react-redux";

export default function Index(props) {
  const playlists = useSelector((store) => store.playlistState.playlists);
  const [formToggle, setFormToggle] = useState(false);

  const {
    selectedPlaylist,
    searchButtonToggle,
    newPlaylist,
    selectPlaylistHandler,
    newPlaylistSubmitHandler,
    formInputChangeHandler,
  } = props;

  const styles = {
    container: css`
      display: grid;
      grid-template-rows: repeat(auto-fill, 1fr);
      grid-auto-rows: min-content;
      gap: 1rem;
      z-index: 1000;
      font-family: "Noto Sans", sans-serif;
    `,
  };

  const createNewButtonHandler = () => setFormToggle((prevState) => !prevState);

  const searchFormButtonHandler = () => searchButtonToggle({ state: true });

  return (
    <div css={styles.container}>
      {formToggle && (
        <PopupForm
          formSubmitHandler={newPlaylistSubmitHandler}
          inputValue={newPlaylist}
          inputHandler={formInputChangeHandler}
        />
      )}
      <Header searchFormButtonHandler={searchFormButtonHandler} />
      {playlists?.map((playlist, index) => (
        <PlaylistCard
          key={index}
          playlistData={playlist}
          selectPlaylistHandler={selectPlaylistHandler}
          selectedPlaylist={selectedPlaylist}
        />
      ))}
      <CreateNewCard createNewButtonHandler={createNewButtonHandler} />
    </div>
  );
}
