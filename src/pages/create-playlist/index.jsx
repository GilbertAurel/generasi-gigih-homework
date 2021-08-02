/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  spotifyFetchPlaylist,
  spotifyFetchPlaylistTracks,
  spotifyFetchCurrentlyPlaying,
  spotifySetPlaylistId,
} from 'store/actions';

import { SPOTIFY_FETCH_SEARCH } from 'adapters/fetchHandlers';
import { useForm } from 'utils/useForm';

import PageLayout from 'components/pageLayout';
import PlaylistSelection from './_components/playlist-selection';
import SongList from './_components/song-list';
import SongPlayer from './_components/song-player';

const initialFormData = {
  search: '',
};

export default function Page() {
  const dispatch = useDispatch();
  const spotifyToken = useSelector((store) => store.userState.token);
  const currentTracks = useSelector((store) => store.playlistState.currentTracks);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, searchValueHanlder] = useForm(initialFormData);

  useEffect(() => {
    if (spotifyToken) {
      dispatch(spotifyFetchPlaylist(spotifyToken));
      dispatch(spotifyFetchCurrentlyPlaying(spotifyToken));
    }
  }, [dispatch, spotifyToken]);

  const searchButtonToggle = ({ state }) => setToggleSearchBar(state);

  const selectPlaylistHandler = (playlist) => {
    dispatch(spotifyFetchPlaylistTracks(spotifyToken, playlist.id));
    dispatch(spotifySetPlaylistId(playlist.id));
    searchButtonToggle({ state: false });
  };

  const searchButtonHandler = async (event) => {
    event.preventDefault();

    if (searchValue) {
      const config = {
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
        },
        params: {
          q: searchValue.search,
          type: 'track',
          limit: 15,
        },
      };

      await SPOTIFY_FETCH_SEARCH(config).then((res) => setSearchResult(res.tracks.items));
    }
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
        />
        <SongList
          songs={toggleSearchBar ? searchResult : currentTracks}
          searchButtonHandler={searchButtonHandler}
          searchValueHandler={searchValueHanlder}
          searchValue={searchValue}
          openSearchBar={toggleSearchBar}
        />
      </div>
    </PageLayout>
  );
}
