/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import { GIF_DATA } from "constants/dummyData";
import PageLayout from "components/pageLayout";
import FrostedBackground from "components/frostedBackground";
import InputForm from "./inputForm";
import HandsonGIF from "./handsonGIF";

export default function Index() {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const RenderGIFResult = () => {
    return GIF_DATA.map(
      (gif, index) =>
        gif.rating === inputValue && <HandsonGIF key={index} url={gif.url} />
    );
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
          row-gap: 1.5rem;
        `}
      >
        <FrostedBackground imageUrl={GIF_DATA.url} />
        <InputForm
          inputChangeHandler={inputChangeHandler}
          inputValue={inputValue}
        />
        {RenderGIFResult()}
      </div>
    </PageLayout>
  );
}
