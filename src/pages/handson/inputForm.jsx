/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { SEARCH_GIF_HEADING } from "constants/dummyData";
import { COLORS } from "constants/theme";

export default function InputForm({
  inputValue,
  inputChangeHandler,
  searchButtonHandler,
}) {
  const styles = {
    container: css`
      grid-column: 1/3;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    heading: css`
      color: ${COLORS.TEXT_BRIGHT};
    `,
    inputText: css`
      width: 20rem;
      padding: 0.5rem;
      background-color: ${COLORS.BTN_NOT_ACTIVE};
      border-radius: 1rem;
      border: none;
      outline: none;
    `,
    button: css`
      visibility: hidden;
    `,
  };

  return (
    <form css={styles.container} onSubmit={searchButtonHandler}>
      <h1 css={styles.heading}>{SEARCH_GIF_HEADING}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={inputChangeHandler}
        css={styles.inputText}
      />
      <button type="submit" css={styles.button} />
    </form>
  );
}
