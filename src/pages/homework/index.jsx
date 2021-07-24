/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import { SONG_DATA, PLAYLISTS_DATA } from "constants/dummyData";
import { SPOTIFY_FETCH_SEARCH } from "adapters/fetchHandlers";
import { SPOTIFY_CREATE_PLAYLIST } from "adapters/postHandler";
import {
  SPOTIFY_CREATE_PLAYLIST_URL,
  SPOTIFY_SEARCH_URL,
} from "constants/urls";
import { songIsUnique } from "constants/uniqueChecker";

import Background from "components/frostedBackground";
import PageLayout from "components/pageLayout";
import SongList from "components/song-list";
import SongPlayer from "components/song-player";
import PlaylistSelections from "components/playlist-selection";

export default function Index({ hashToken, user }) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(SONG_DATA[0]);
  const [playlists, setPlaylists] = useState(PLAYLISTS_DATA);
  const [selectedPlaylist, setSelectedPlaylist] = useState(PLAYLISTS_DATA[0]);
  const [inputValue, setInputValue] = useState("");
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const inputChangeHandler = (e) => setInputValue(e.target.value);

  const searchButtonToggle = ({ state }) => setOpenSearchBar(state);

  const changeSongHandler = (song) => {
    setCurrentlyPlaying(song);
    const newPlaylist = playlists[1];

    if (songIsUnique(newPlaylist, song) && newPlaylist) {
      newPlaylist.data.push(song);
      setPlaylists((prevState) => [...prevState.slice(0, 1), newPlaylist]);
    }
  };

  const selectPlaylistHandler = (playlist) => {
    searchButtonToggle({ state: false });
    setSelectedPlaylist(playlist);
  };

  const searchButtonHandler = (event) => {
    event.preventDefault();

    if (inputValue) {
      const config = {
        headers: {
          Authorization: "Bearer " + hashToken.access_token,
        },
        params: {
          q: inputValue,
          type: "track",
          limit: 15,
        },
      };

      return SPOTIFY_FETCH_SEARCH(SPOTIFY_SEARCH_URL, config).then((res) =>
        setSearchResult(res.tracks.items)
      );
    }
  };

  const createNewPlaylist = (newPlaylist) => {
    if (newPlaylist) {
      const config = {
        headers: {
          Authorization: "Bearer " + hashToken.access_token,
          "Content-Type": "application/json",
        },
        body: {
          name: newPlaylist.name,
          description: newPlaylist.description,
          public: false,
        },
      };

      return SPOTIFY_CREATE_PLAYLIST(
        SPOTIFY_CREATE_PLAYLIST_URL(user.id),
        config
      ).then(() => setPlaylists([...playlists, newPlaylist]));
    }
  };

  const params = {
    songList: {
      songs: openSearchBar ? searchResult : selectedPlaylist.data,
      currentlyPlaying,
      changeSongHandler,
      inputValue,
      inputChangeHandler,
      searchButtonHandler,
      openSearchBar,
    },
    playlistSelection: {
      playlists,
      selectedPlaylist,
      selectPlaylistHandler,
      searchButtonToggle,
      createNewPlaylist,
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
        <PlaylistSelections {...params.playlistSelection} />
        <SongList {...params.songList} />
        <Background imageUrl={currentlyPlaying.album.images[0].url} />
      </div>
    </PageLayout>
  );
}
