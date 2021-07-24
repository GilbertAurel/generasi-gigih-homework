/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { COLORS, FONTS } from "constants/theme";

export default function InputBar({
  inputValue,
  inputChangeHandler,
  searchButtonHandler,
}) {
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
        grid-column: 1/3;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
          color: ${COLORS.TEXT_BRIGHT};
        }

        button {
          color: ${COLORS.PRIMARY};
          background-color: ${COLORS.BG_DARK};
          border: none;
          font-family: "Noto Sans", sans-serif;
          font-size: ${FONTS.CONTENT};
        }

        section {
          display: flex;
          flex-direction: row;
          gap: 1rem;
        }
      `}
    >
      <h1>Search By Name</h1>
      <section>
        <input
          type="text"
          value={inputValue}
          onChange={inputChangeHandler}
          onKeyPress={searchButtonHandler}
          css={css`
            width: 20rem;
            padding: 0.5rem;
            background-color: ${COLORS.BTN_NOT_ACTIVE};
            border-radius: 1rem;
            border: none;
            outline: none;
          `}
        />
      </section>
    </div>
  );
}
