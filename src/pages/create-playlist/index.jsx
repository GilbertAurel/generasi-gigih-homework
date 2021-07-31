/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  spotifyFetchPlaylist,
  spotifyFetchPlaylistTracks,
  spotifyFetchCurrentlyPlaying,
  spotifyChangeSong,
  spotifyAddPlaylistTracks,
} from "store/actions";

import { SPOTIFY_FETCH_SEARCH } from "adapters/fetchHandlers";
import { SPOTIFY_ADD_TO_PLAYLIST } from "adapters/postHandler";
import { useForm } from "utils/useForm";

import { PageLayout } from "components";
import { PlaylistSelection, SongList, SongPlayer } from "./_components";

const initialFormData = {
  playlist: { name: "", description: "", data: [] },
  search: {
    search: "",
  },
};

const initialScrollIndex = 1;

export default function Page() {
  const dispatch = useDispatch();
  const { token: spotifyToken } = useSelector((store) => store.userState);
  const currentTracks = useSelector(
    (store) => store.playlistState.currentTracks
  );
  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, searchInputChangeHandler] = useForm(
    initialFormData.search
  );
  const [scrollIndex, setScrollIndex] = useState(initialScrollIndex);

  useEffect(() => {
    if (spotifyToken) {
      dispatch(spotifyFetchPlaylist(spotifyToken));
      dispatch(spotifyFetchCurrentlyPlaying(spotifyToken));
    }
  }, [dispatch, spotifyToken]);

  const searchButtonToggle = ({ state }) => setOpenSearchBar(state);

  const changeSongHandler = (song) => dispatch(spotifyChangeSong(song));

  const selectPlaylistHandler = (playlist) => {
    dispatch(spotifyFetchPlaylistTracks(spotifyToken, playlist.id));
    searchButtonToggle({ state: false });
    setSelectedPlaylist(playlist);
    setScrollIndex(initialScrollIndex);
  };

  const searchButtonHandler = async (event) => {
    event.preventDefault();

    if (searchValue) {
      const config = {
        headers: {
          Authorization: "Bearer " + spotifyToken,
        },
        params: {
          q: searchValue.search,
          type: "track",
          limit: 15,
        },
      };

      return await SPOTIFY_FETCH_SEARCH(config).then((res) =>
        setSearchResult(res.tracks.items)
      );
    }
  };

  const addSongToPlaylist = (playlistId, songUri) => {
    const config = {
      headers: {
        Authorization: "Bearer " + spotifyToken,
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
        spotifyAddPlaylistTracks(spotifyToken, selectedPlaylist.id, scrollIndex)
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
        <PlaylistSelection
          selectPlaylistHandler={selectPlaylistHandler}
          searchButtonToggle={searchButtonToggle}
          selectedPlaylist={selectedPlaylist}
        />
        <SongList {...params.songList} />
      </div>
    </PageLayout>
  );
}
