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
  spotifyChangeSong,
  spotifyAddPlaylistTracks,
} from "redux/actions";

import { SPOTIFY_FETCH_SEARCH } from "adapters/fetchHandlers";
import {
  SPOTIFY_CREATE_PLAYLIST,
  SPOTIFY_ADD_TO_PLAYLIST,
} from "adapters/postHandler";
import { useForm } from "constants/useForm";

import {
  PageLayout,
  SongList,
  SongPlayer,
  PlaylistSelection,
} from "components";

const initialFormData = {
  playlist: { name: "", description: "", data: [] },
  search: {
    search: "",
  },
};

const initialScrollIndex = 1;

export default function Index({ spotifyToken }) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userState.user);
  const currentTracks = useSelector(
    (store) => store.playlistState.currentTracks
  );
  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, searchInputChangeHandler] = useForm(
    initialFormData.search
  );
  const [newPlaylist, formInputChangeHandler, resetPlaylistForm] = useForm(
    initialFormData.playlist
  );
  const [scrollIndex, setScrollIndex] = useState(initialScrollIndex);

  useEffect(() => {
    dispatch(spotifyLoginAuth(spotifyToken));
    dispatch(spotifyFetchPlaylist(spotifyToken));
    dispatch(spotifyFetchCurrentlyPlaying(spotifyToken, "ES"));
  }, [dispatch, spotifyToken]);

  const searchButtonToggle = ({ state }) => setOpenSearchBar(state);

  const changeSongHandler = (song) => dispatch(spotifyChangeSong(song));

  const selectPlaylistHandler = (playlist) => {
    dispatch(spotifyFetchPlaylistTracks(spotifyToken, playlist.id, "ES"));
    searchButtonToggle({ state: false });
    setSelectedPlaylist(playlist);
    setScrollIndex(initialScrollIndex);
  };

  const searchButtonHandler = (event) => {
    event.preventDefault();

    if (searchValue) {
      const config = {
        headers: {
          Authorization: "Bearer " + spotifyToken.access_token,
        },
        params: {
          q: searchValue.search,
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

      return SPOTIFY_CREATE_PLAYLIST(user.id, postData, config).then(() => {
        dispatch(spotifyFetchPlaylist(spotifyToken));
        resetPlaylistForm(initialFormData.playlist);
      });
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

  const addSongToPlaylist = (playlistId, songUri) => {
    const config = {
      headers: {
        Authorization: "Bearer " + spotifyToken.access_token,
      },
      params: {
        uris: songUri,
      },
    };

    return SPOTIFY_ADD_TO_PLAYLIST(config, playlistId).then((res) =>
      dispatch(spotifyFetchPlaylist(spotifyToken))
    );
  };

  const onScrollReloadNewData = (e) => {
    const scrollAtBottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (scrollAtBottom) {
      setScrollIndex((prevState) => prevState + 1);
      dispatch(
        spotifyAddPlaylistTracks(
          spotifyToken,
          selectedPlaylist.id,
          "ES",
          scrollIndex
        )
      );
    }
  };

  const params = {
    songList: {
      songs: openSearchBar ? searchResult : currentTracks,
      changeSongHandler,
      searchButtonHandler,
      searchInputChangeHandler,
      searchValue,
      openSearchBar,
      addSongToPlaylist,
      onScrollReloadNewData,
    },
    playlistSelection: {
      selectPlaylistHandler,
      formInputChangeHandler,
      newPlaylistSubmitHandler,
      searchButtonToggle,
      selectedPlaylist,
      newPlaylist,
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
        <SongPlayer />
        <PlaylistSelection {...params.playlistSelection} />
        <SongList {...params.songList} />
      </div>
    </PageLayout>
  );
}
