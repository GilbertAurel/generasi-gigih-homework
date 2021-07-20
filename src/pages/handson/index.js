/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import { GIPHY_SEARCH_URL } from "constants/urls";
import PageLayout from "components/pageLayout";
import Skeleton from "components/skeleton";
import InputForm from "./inputForm";
import HandsonGIF from "./handsonGIF";

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const [showGif, setShowGif] = useState([]);
  const [loaded, setLoaded] = useState(true);

  const searchButtonHandler = (event) => {
    const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;

    if (event.key === "Enter") {
      setLoaded(false);
      return fetch(GIPHY_SEARCH_URL(GIPHY_KEY, inputValue, 6))
        .then((data) => data.json())
        .then((json) => {
          setShowGif(json.data.map((gif) => gif.images.original.url));
          setLoaded(true);
        })
        .catch((error) => console.log(error));
    }
  };

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const RenderGIFResult = () => {
    return showGif.map((gif, index) => <HandsonGIF key={index} url={gif} />);
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
        <InputForm
          inputChangeHandler={inputChangeHandler}
          inputValue={inputValue}
          searchButtonHandler={searchButtonHandler}
        />
        {loaded ? RenderGIFResult() : <Skeleton type={"gif"} />}
      </div>
    </PageLayout>
  );
}
