/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { GIF_DATA } from "constants/dummyData";
import RenderInputForm from "components/inputForm";
import RenderGIF from "components/handsonGIF";
import FrostedBackground from "components/frostedBackground";

export default function Index() {
  const containerRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    gsap.to(containerRef.current, {
      visibility: "visible",
      duration: 0.2,
    });
  }, []);

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      ref={containerRef}
      css={css`
        padding: 0 20%;
        grid-row: 1/3;
        grid-column: 1/2;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
      `}
    >
      <FrostedBackground imageUrl={GIF_DATA.url} />
      <RenderGIF url={GIF_DATA.url} title={GIF_DATA.title} />
      <RenderInputForm
        inputChangeHandler={inputChangeHandler}
        inputValue={inputValue}
      />
    </div>
  );
}
