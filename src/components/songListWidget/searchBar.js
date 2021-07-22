/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function SearchBar(props) {
  const { inputValue, inputChangeHandler, searchButtonHandler } = props;

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      width: 100%;
      padding: 0.4rem 2rem;
      border: none;
      border-radius: 1rem;
    }
  `;

  return (
    <div css={containerStyle}>
      <input
        type="text"
        value={inputValue}
        onChange={inputChangeHandler}
        onKeyPress={searchButtonHandler}
        placeholder="Artists, songs, or podcasts"
      />
    </div>
  );
}
