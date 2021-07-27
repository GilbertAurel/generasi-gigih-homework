/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { PageLayout, Skeleton } from "components";
import { getNewGIF } from "redux/actions";

import InputForm from "./inputForm";
import GifCard from "./gifCard";

const DATA_LIMIT = 6;

export default function Index() {
  const showGif = useSelector((store) => store.gifState.currentGIF);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [loaded, setLoaded] = useState(true);
  const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;

  const inputChangeHandler = (e) => setInputValue(e.target.value);

  const searchButtonHandler = (event) => {
    event.preventDefault();
    setLoaded(false);
    dispatch(getNewGIF(GIPHY_KEY, inputValue, DATA_LIMIT));
    setLoaded(true);
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

  return (
    <PageLayout>
      <div css={styles.container}>
        <InputForm
          inputChangeHandler={inputChangeHandler}
          inputValue={inputValue}
          searchButtonHandler={searchButtonHandler}
        />
        {loaded ? (
          showGif.map((gif, index) => <GifCard key={index} url={gif} />)
        ) : (
          <Skeleton type={"gif"} />
        )}
      </div>
    </PageLayout>
  );
}
