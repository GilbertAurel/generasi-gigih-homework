/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { spotifyAddPlaylistTracks, spotifyChangeSong } from 'store/actions';
import SongCard from './songCard';
import SearchBar from './searchBar';
import Header from './header';
import AlertSpinner from './alertSpinner';

const initialScrollIndex = 1;

export default function SongList(props) {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.userState.token);
  const playlistId = useSelector((store) => store.playlistState.currentPlaylist);
  const currentlyPlaying = useSelector((store) => store.playlistState.currentlyPlaying);
  const [toggleMenu, setToggleMenu] = useState('');
  const [scrollIndex, setScrollIndex] = useState(initialScrollIndex);

  const { songs, searchValue, searchValueHandler, searchButtonHandler, openSearchBar } = props;

  useEffect(() => {
    setScrollIndex(initialScrollIndex);
  }, [playlistId]);

  const openMenuHandler = (id) => setToggleMenu(toggleMenu === id ? '' : id);

  const changeSongHandler = (song) => dispatch(spotifyChangeSong(song));

  const onScrollReloadNewData = (e) => {
    const scrollAtBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (scrollAtBottom) {
      setScrollIndex((prevState) => prevState + 1);
      dispatch(spotifyAddPlaylistTracks(token, playlistId, scrollIndex));
    }
  };

  const menuHandler = (e, song) => {
    if (e.target.id === 'play') {
      setToggleMenu('');
      changeSongHandler(song);
    }
  };

  const styles = {
    container: css`
      grid-column: 2/3;
      grid-row: 1/3;
      overflow-y: scroll;
      display: grid;
      grid-template-rows: repeat(auto-fill, 3rem);
      row-gap: 0.8rem;
      scrollbar-width: none;
      z-index: 1000;

      ::-webkit-scrollbar {
        display: none;
      }
    `,
  };

  return (
    <div css={styles.container} onScroll={onScrollReloadNewData}>
      {openSearchBar && (
        <SearchBar
          searchValue={searchValue}
          searchValueHandler={searchValueHandler}
          searchButtonHandler={searchButtonHandler}
        />
      )}
      <Header />
      {songs?.length > 0 ? (
        songs.map((song) => (
          <SongCard
            key={song.id}
            selected={song.id === currentlyPlaying?.id}
            openMenu={song.id === toggleMenu}
            songData={song}
            changeSongHandler={changeSongHandler}
            openMenuHandler={openMenuHandler}
            menuHandler={menuHandler}
          />
        ))
      ) : (
        <AlertSpinner type="noSong" />
      )}
      {songs?.length > 0 && <AlertSpinner type="loading" />}
    </div>
  );
}
