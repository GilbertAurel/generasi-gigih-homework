/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

export default function SearchBar({ searchValue, searchValueHandler, searchButtonHandler }) {
  const styles = {
    container: css`
      display: flex;
      flex-direction: column;
      gap: 1rem;
    `,
    inputText: css`
      width: 100%;
      padding: 0.4rem 2rem;
      border: none;
      border-radius: 1rem;
    `,
    button: css`
      visibility: hidden;
    `,
  };

  return (
    <form onSubmit={searchButtonHandler} css={styles.container}>
      <input
        type="text"
        name="search"
        value={searchValue.search}
        onChange={searchValueHandler}
        placeholder="Artists, songs, or podcasts"
        css={styles.inputText}
      />
      <button type="submit" css={styles.button}>
        button
      </button>
    </form>
  );
}
