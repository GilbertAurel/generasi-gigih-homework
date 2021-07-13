/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import RenderInputForm from "components/inputForm";
import RenderGIF from "components/handsonGIF";

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
        grid-row: 2/3;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        align-items: center;
        visibility: hidden;
      `}
    >
      <RenderGIF />
      <RenderInputForm
        inputChangeHandler={inputChangeHandler}
        inputValue={inputValue}
      />
    </div>
  );
}
