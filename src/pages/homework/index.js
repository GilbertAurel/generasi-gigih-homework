/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import { SONG_DATA, PLAYLISTS_DATA } from "constants/dummyData";
import { SPOTIFY_FETCH_SEARCH } from "constants/fetchData";
import { SPOTIFY_SEARCH_URL } from "constants/urls";
import { songIsUnique } from "constants/uniqueChecker";

import FrostedBackground from "components/frostedBackground";
import PageLayout from "components/pageLayout";
import SongListWidget from "components/songListWidget";
import PlayingWidget from "components/playingWidget";
import PlaylistSelectionWidget from "components/playlistSelectionWidget";

export default function Index({ hashToken }) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(SONG_DATA[0]);
  const [playlists, setPlaylists] = useState(PLAYLISTS_DATA);
  const [selectedPlaylist, setSelectedPlaylist] = useState(PLAYLISTS_DATA[0]);
  const [inputValue, setInputValue] = useState("");
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const changeSongHandler = (song) => {
    setCurrentlyPlaying(song);
    let newPlaylist = playlists[1];

    if (songIsUnique(newPlaylist, song)) {
      newPlaylist.data.push(song);
      setPlaylists((prevState) => [...prevState.slice(0, 1), newPlaylist]);
    }
  };

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const searchButtonHandler = async (event) => {
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

      await SPOTIFY_FETCH_SEARCH(SPOTIFY_SEARCH_URL, config).then((res) =>
        setSearchResult(res.tracks.items)
      );
    }
  };

  const propsParams = {
    listProps: {
      playlist: openSearchBar ? searchResult : selectedPlaylist.data,
      currentlyPlaying,
      changeSongHandler,
      inputValue,
      inputChangeHandler,
      searchButtonHandler,
      openSearchBar,
    },
    playlistListProps: {
      playlists,
      selectedPlaylist,
      setSelectedPlaylist,
      setOpenSearchBar,
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
