/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import { SONG_DATA } from "constants/dummyData";
import { SPOTIFY_FETCH_SEARCH } from "constants/fetchData";
import { SPOTIFY_SEARCH_URL } from "constants/urls";

import FrostedBackground from "components/frostedBackground";
import PageLayout from "components/pageLayout";
import SongListWidget from "components/songListWidget";
import PlayingWidget from "components/playingWidget";
import PlaylistSelectionWidget from "components/playlistSelectionWidget";

const initializePlaylist = [
  {
    name: "Generasi Gigih",
    data: SONG_DATA,
  },
  {
    name: "New Playlist",
    data: [],
  },
];

export default function Index({ hashToken }) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(SONG_DATA[0]);
  const [searchState, setSearchState] = useState(false);
  const [search, setSearch] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [playlists, setPlaylists] = useState(initializePlaylist);
  const [selectedPlaylist, setSelectedPlaylist] = useState(
    initializePlaylist[0]
  );

  const changeSongHandler = (song) => {
    setCurrentlyPlaying(song);
    setPlaylists((prevState) => [...prevState]);
  };

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const searchButtonHandler = (event) => {
    if (event.key === "Enter" && inputValue) {
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

      SPOTIFY_FETCH_SEARCH(SPOTIFY_SEARCH_URL, config).then((res) =>
        setSearch(res.tracks.items)
      );
    }
  };

  const propsParams = {
    listProps: {
      playlist: searchState ? search : selectedPlaylist.data,
      currentlyPlaying,
      changeSongHandler,
      inputValue,
      inputChangeHandler,
      searchButtonHandler,
      searchState,
    },
    playlistListProps: {
      playlists,
      selectedPlaylist,
      setSelectedPlaylist,
      setSearchState,
    },
  };

  return (
    <PageLayout>
      <div
        css={css`
          width: 100%;
          height: 100vh;
          padding: 10rem 0;
          display: grid;
          grid-template-columns: auto 65%;
          grid-template-rows: 30% auto;
          grid-auto-rows: minmax(100px, 70%);
          overflow: hidden;
          gap: 3rem 3rem;
        `}
      >
        <PlayingWidget currentlyPlaying={currentlyPlaying} />
        <PlaylistSelectionWidget {...propsParams.playlistListProps} />
        <SongListWidget {...propsParams.listProps} />
        <FrostedBackground imageUrl={currentlyPlaying.album.images[0].url} />
      </div>
    </PageLayout>
  );
}
