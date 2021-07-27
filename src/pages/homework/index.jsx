/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  spotifyLoginAuth,
  spotifyFetchPlaylist,
  spotifyFetchPlaylistTracks,
  spotifyFetchCurrentlyPlaying,
} from "redux/actions";

import { SPOTIFY_FETCH_SEARCH } from "adapters/fetchHandlers";
import { SPOTIFY_CREATE_PLAYLIST } from "adapters/postHandler";
import { useForm } from "constants/useForm";

import {
  PageLayout,
  SongList,
  SongPlayer,
  PlaylistSelection,
} from "components";

const initialFormData = {
  name: "",
  description: "",
  data: [],
};

export default function Index({ spotifyToken }) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userState.user);
  const currentTracks = useSelector(
    (store) => store.playlistState.currentTracks
  );
  const initialPlaylist = useSelector((store) => store.playlistState.playlists);
  const [currentlyPlaying, setCurrentlyPlaying] = useState();
  const [selectedPlaylist, setSelectedPlaylist] = useState(initialPlaylist[0]);
  const [inputValue, setInputValue] = useState("");
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [newPlaylist, formInputChangeHandler, resetPlaylistForm] =
    useForm(initialFormData);

  useEffect(() => {
    dispatch(spotifyLoginAuth(spotifyToken));
    dispatch(spotifyFetchPlaylist(spotifyToken));
    dispatch(spotifyFetchCurrentlyPlaying(spotifyToken, "ES"));
  }, [dispatch, spotifyToken]);

  const inputChangeHandler = (e) => setInputValue(e.target.value);

  const searchButtonToggle = ({ state }) => setOpenSearchBar(state);

  const changeSongHandler = (song) => setCurrentlyPlaying(song);

  const selectPlaylistHandler = (playlist) => {
    dispatch(spotifyFetchPlaylistTracks(spotifyToken, playlist.id, "ES"));
    searchButtonToggle({ state: false });
    setSelectedPlaylist(playlist);
  };

  const searchButtonHandler = (event) => {
    event.preventDefault();

    if (inputValue) {
      const config = {
        headers: {
          Authorization: "Bearer " + spotifyToken.access_token,
        },
        params: {
          q: inputValue,
          type: "track",
          limit: 15,
        },
      };

      return SPOTIFY_FETCH_SEARCH(config).then((res) =>
        setSearchResult(res.tracks.items)
      );
    }
  };

  const createNewPlaylist = () => {
    if (newPlaylist) {
      const config = {
        headers: {
          Authorization: "Bearer " + spotifyToken.access_token,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      const postData = {
        name: newPlaylist.name,
        description: newPlaylist.description,
        public: false,
      };

      return SPOTIFY_CREATE_PLAYLIST(user.id, postData, config).then(() =>
        resetPlaylistForm(initialFormData)
      );
    }
  };

  const newPlaylistSubmitHandler = (event) => {
    event.preventDefault();
    return (
      newPlaylist.name.length > 10 &&
      newPlaylist.description.length > 20 &&
      createNewPlaylist(newPlaylist)
    );
  };

  const params = {
    songList: {
      songs: openSearchBar ? searchResult : currentTracks,
      currentlyPlaying,
      changeSongHandler,
      inputValue,
      inputChangeHandler,
      searchButtonHandler,
      openSearchBar,
    },
    playlistSelection: {
      selectedPlaylist,
      selectPlaylistHandler,
      searchButtonToggle,
      newPlaylist,
      formInputChangeHandler,
      newPlaylistSubmitHandler,
    },
  };

  const styles = {
    container: css`
      width: 100%;
      height: 100vh;
      padding: 10rem 0;
      display: grid;
      grid-template-columns: auto 65%;
      grid-template-rows: 30% auto;
      grid-auto-rows: minmax(100px, 70%);
      overflow: hidden;
      gap: 3rem 3rem;
    `,
  };

  return (
    <PageLayout>
      <div css={styles.container}>
        <SongPlayer currentlyPlaying={currentlyPlaying} />
        <PlaylistSelection {...params.playlistSelection} />
        <SongList {...params.songList} />
      </div>
    </PageLayout>
  );
}
