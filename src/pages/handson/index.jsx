/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import { GIPHY_FETCH_SEARCH } from "adapters/fetchHandlers";
import PageLayout from "components/pageLayout";
import Skeleton from "components/skeleton";

import InputForm from "./inputForm";
import GifCard from "./gifCard";

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const [showGif, setShowGif] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;
  const DATA_LIMIT = 6;

  const inputChangeHandler = (e) => setInputValue(e.target.value);

  const searchButtonHandler = (event) => {
    event.preventDefault();
    setLoaded(false);
    const config = {
      params: {
        api_key: GIPHY_KEY,
        q: inputValue,
        limit: DATA_LIMIT,
      },
    };

    return GIPHY_FETCH_SEARCH(config).then((res) => {
      setShowGif(res.data.map((gif) => gif.images.original.url));
      setTimeout(() => setLoaded(true), 1000);
    });
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
