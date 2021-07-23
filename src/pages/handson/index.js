/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import { GIPHY_SEARCH_URL } from "constants/urls";
import PageLayout from "components/pageLayout";
import Skeleton from "components/skeleton";
import InputBar from "./inputBar";
import GifCard from "./gifCard";
import { GIPHY_FETCH_SEARCH } from "constants/fetchData";

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const [showGif, setShowGif] = useState([]);
  const [loaded, setLoaded] = useState(true);

  const searchButtonHandler = async (event) => {
    const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;
    const DATA_LIMIT = 6;

    if (event.key === "Enter") {
      setLoaded(false);

      const config = {
        params: {
          api_key: GIPHY_KEY,
          q: inputValue,
          limit: DATA_LIMIT,
        },
      };

      return await GIPHY_FETCH_SEARCH(GIPHY_SEARCH_URL, config).then((res) => {
        setShowGif(res.data.map((gif) => gif.images.original.url));
        setTimeout(() => setLoaded(true), 1000);
      });
    }
  };

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const RenderGIFResult = () => {
    return showGif.map((gif, index) => <GifCard key={index} url={gif} />);
  };

  return (
    <PageLayout>
      <div
        css={css`
          width: 100%;
          margin: 8rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          align-items: center;
          gap: 2rem;
        `}
      >
        <InputBar
          inputChangeHandler={inputChangeHandler}
          inputValue={inputValue}
          searchButtonHandler={searchButtonHandler}
        />
        {loaded ? RenderGIFResult() : <Skeleton type={"gif"} />}
      </div>
    </PageLayout>
  );
}
