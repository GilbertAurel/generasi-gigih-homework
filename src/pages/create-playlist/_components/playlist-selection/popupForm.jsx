/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'utils/theme';

export default function popupForm({ formSubmitHandler, inputHandler, inputValue }) {
  const styles = {
    container: css`
      height: 10rem;
      display: grid;
      grid-template-rows: min-content min-content 1fr;
      gap: 1rem;
      font-family: 'Noto Sans', sans-serif;

      h1 {
        margin: 0;
        padding: 0;
        font-size: ${FONTS.BODY};
        color: ${COLORS.PRIMARY};
      }

      input {
        width: 80%;
        padding: 0.2rem 1rem;
        font-size: ${FONTS.CONTENT};
        border-radius: 0.5rem;
      }

      textarea {
        width: 80%;
        padding: 0.2rem 1rem;
        resize: none;
        border-radius: 0.5rem;
      }

      button {
        visibility: hidden;
      }
    `,
  };

  return (
    <form css={styles.container} onSubmit={formSubmitHandler}>
      <h1>Create new playlist</h1>
      <input
        type="text"
        name="name"
        value={inputValue.name}
        onChange={inputHandler}
        placeholder="My playlist"
      />
      <textarea
        type="text"
        name="description"
        value={inputValue.description}
        onChange={inputHandler}
        placeholder="Add an optional description"
      />
      <button type="submit" />
    </form>
  );
}
