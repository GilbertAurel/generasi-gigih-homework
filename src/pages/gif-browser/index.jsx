/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Skeleton } from '@material-ui/lab';

import { giphyFetchSearchResult, giphyFetchTrending } from 'store/actions';

import PageLayout from 'components/pageLayout';
import GifCard from './_components/gif-card';
import SearchBar from './_components/search-bar';

export default function Page() {
  const search = useSelector((store) => store.gifState.currentGIF);
  const trending = useSelector((store) => store.gifState.trending);
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const [inputValue, setInputValue] = useState('');
  const [showGif, setShowGif] = useState();
  const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;

  useEffect(() => {
    if (location === '/trending-gif') {
      dispatch(giphyFetchTrending(GIPHY_KEY));
    }
  }, [GIPHY_KEY, dispatch, location]);

  useEffect(() => {
    if (location === '/trending-gif') {
      return setShowGif(trending);
    }

    return setShowGif(search);
  }, [search, trending, location]);

  const inputChangeHandler = (e) => setInputValue(e.target.value);

  const searchButtonHandler = (event) => {
    event.preventDefault();
    dispatch(giphyFetchSearchResult(GIPHY_KEY, inputValue));
    setShowGif(search);
  };

  const styles = {
    container: css`
      width: 100%;
      margin: 8rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      align-items: center;
      gap: 2rem;
    `,
  };

  if (showGif) {
    return (
      <PageLayout>
        <div css={styles.container}>
          {location === '/search-gif' && (
            <SearchBar
              inputChangeHandler={inputChangeHandler}
              inputValue={inputValue}
              searchButtonHandler={searchButtonHandler}
            />
          )}
          {showGif.length > 0
            ? showGif.map((gif) => <GifCard key={gif} url={gif} />)
            : [1, 2, 3, 4, 5, 6].map(() => (
                <Skeleton animation="wave" variant="rect" width={304} height={304} />
              ))}
        </div>
      </PageLayout>
    );
  }

  return <h1>loading</h1>;
}
