/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { COLORS } from "constants/theme";

export default function InputForm({ inputValue, inputChangeHandler }) {
  const inputRef = useRef(null);

  useEffect(() => {
    gsap.from(inputRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
    });
  }, []);

  return (
    <div
      ref={inputRef}
      css={css`
        padding: 100px;

        h1 {
          color: ${COLORS.TEXT_BRIGHT};
        }
      `}
    >
      <h1>Search GIF</h1>
      <section
        css={css`
          display: flex;
          flex-direction: row;
          gap: 10px;
        `}
      >
        <input type="text" value={inputValue} onChange={inputChangeHandler} />
        <button onClick={() => alert(`search: ${inputValue}`)}>search</button>
      </section>
    </div>
  );
}
