/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState } from 'react';

import { COLORS, FONTS } from 'utils/theme';
import { useSelector } from 'react-redux';
import SongCard from './songCard';
import SearchBar from './searchBar';
import Header from './header';

export default function SongList(props) {
  const currentlyPlaying = useSelector((store) => store.playlistState.currentlyPlaying);
  const [toggleMenu, setToggleMenu] = useState('');

  const {
    songs,
    changeSongHandler,
    searchValue,
    searchInputChangeHandler,
    searchButtonHandler,
    openSearchBar,
    addSongToPlaylist,
    onScrollReloadNewData,
  } = props;

  const openMenuHandler = (id) => setToggleMenu(toggleMenu === id ? '' : id);

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
    noSongAlert: css`
      display: grid;
      justify-items: center;
      align-items: center;
      font-family: 'Noto Sans', sans-serif;
      font-size: ${FONTS.CONTENT};
      color: ${COLORS.GRAY};
    `,
    loading: css`
      display: grid;
      justify-items: center;
      align-items: center;
      font-family: 'Noto Sans', sans-serif;
      font-size: ${FONTS.CONTENT};
      color: ${COLORS.GRAY};
    `,
  };

  return (
    <div css={styles.container} onScroll={onScrollReloadNewData}>
      {openSearchBar && (
        <SearchBar
          searchValue={searchValue}
          searchInputChangeHandler={searchInputChangeHandler}
          searchButtonHandler={searchButtonHandler}
        />
      )}
      <Header />
      {songs?.length > 0 ? (
        songs.map((song) => (
          <SongCard
            key={`${song.id}`}
            selected={song.id === currentlyPlaying?.id}
            openMenu={song.id === toggleMenu}
            songData={song}
            changeSongHandler={changeSongHandler}
            openMenuHandler={openMenuHandler}
            menuHandler={menuHandler}
            addSongToPlaylist={addSongToPlaylist}
          />
        ))
      ) : (
        <div css={styles.noSongAlert}>
          <p>playlist empty</p>
        </div>
      )}
      {songs?.length > 0 && (
        <div css={styles.loading}>
          <p>Loading..</p>
        </div>
      )}
    </div>
  );
}
