/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import PlaylistCard from "./playlistCard";
import { COLORS, FONTS } from "constants/theme";
import ICONS from "assets/icons";
import PopupForm from "components/popupForm";

const initialFormData = {
  name: "",
  description: "",
  data: [],
};

export default function Index(props) {
  const [newPlaylist, setNewPlaylist] = useState(initialFormData);
  const [formToggle, setFormToggle] = useState(false);

  const {
    playlists,
    selectedPlaylist,
    selectPlaylistHandler,
    searchButtonToggle,
    createNewPlaylist,
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
    header: css`
      display: flex;
      flex-direction: row;
      gap: 1rem;

      h1:nth-of-type(1) {
        margin: 0;
        padding: 0;
        font-size: ${FONTS.BODY};
        color: ${COLORS.PRIMARY};
      }
    `,
    searchButton: css`
      margin: 0;
      padding: 0;
      font-weight: 500;
      font-size: ${FONTS.BODY};
      color: ${COLORS.GRAY};
      cursor: pointer;
    `,
    createNewButton: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      font-family: "Noto Sans", sans-serif;
      font-size: ${FONTS.CONTENT};
      color: ${COLORS.GRAY};
    `,
  };

  const createNewButtonHandler = () => setFormToggle(true);

  const formInputChangeHandler = (event) => {
    setNewPlaylist({
      ...newPlaylist,
      [event.target?.name]: event.target?.value,
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    return (
      newPlaylist.name.length > 10 &&
      newPlaylist.description.length > 20 &&
      createNewPlaylist(newPlaylist)
    );
  };

  return (
    <div css={styles.container}>
      {formToggle && (
        <PopupForm
          formSubmitHandler={formSubmitHandler}
          inputValue={newPlaylist}
          inputHandler={formInputChangeHandler}
        />
      )}
      <div css={styles.header}>
        <h1>My Playlist</h1>
        <h1
          css={styles.searchButton}
          onClick={() => searchButtonToggle({ state: true })}
        >
          search
        </h1>
      </div>
      {playlists.map((playlist, index) => (
        <PlaylistCard
          key={index}
          playlistData={playlist}
          selectPlaylistHandler={selectPlaylistHandler}
          selectedPlaylist={selectedPlaylist}
        />
      ))}
      <div css={styles.createNewButton} onClick={createNewButtonHandler}>
        <img src={ICONS.ADD} alt="new playlist" />
        <p>Create new playlist</p>
      </div>
    </div>
  );
}
