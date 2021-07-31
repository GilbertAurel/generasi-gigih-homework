/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import PlaylistCard from "./playlistCard";
import PopupForm from "./popupForm";
import CreateNewCard from "./createNewCard";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "utils/useForm";
import { SPOTIFY_CREATE_PLAYLIST } from "adapters/postHandler";
import { spotifyFetchPlaylist } from "store/actions";

const initialFormData = { name: "", description: "", data: [] };

export default function Index({
  selectedPlaylist,
  searchButtonToggle,
  selectPlaylistHandler,
}) {
  const dispatch = useDispatch();
  const { user, token } = useSelector((store) => store.userState);
  const playlists = useSelector((store) => store.playlistState.playlists);
  const [formToggle, setFormToggle] = useState(false);
  const [playlistForm, formChangeHandler, resetForm] = useForm(initialFormData);

  const createNewPlaylist = async () => {
    if (playlistForm) {
      const config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      const postData = {
        name: playlistForm.name,
        description: playlistForm.description,
        public: false,
      };

      return await SPOTIFY_CREATE_PLAYLIST(user.id, postData, config).then(
        () => {
          dispatch(spotifyFetchPlaylist(token));
          resetForm(initialFormData);
        }
      );
    }
  };

  const newPlaylistSubmitHandler = (event) => {
    event.preventDefault();
    return (
      playlistForm.name.length > 10 &&
      playlistForm.description.length > 20 &&
      createNewPlaylist(playlistForm)
    );
  };

  const createNewButtonHandler = () => setFormToggle((prevState) => !prevState);

  const searchFormButtonHandler = () => searchButtonToggle({ state: true });

  const styles = {
    container: css`
      grid-column: 1/2;
      grid-row: 2/3;
      overflow-y: scroll;
      display: grid;
      grid-template-rows: repeat(auto-fill, 1fr);
      grid-auto-rows: min-content;
      gap: 0.9rem;
      z-index: 1000;
      font-family: "Noto Sans", sans-serif;
      scrollbar-width: none;

      ::-webkit-scrollbar {
        display: none;
      }
    `,
  };

  return (
    <div css={styles.container}>
      {formToggle && (
        <PopupForm
          formSubmitHandler={newPlaylistSubmitHandler}
          inputValue={playlistForm}
          inputHandler={formChangeHandler}
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
