/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function popupForm({
  formSubmitHandler,
  inputHandler,
  inputValue,
}) {
  const styles = {
    container: css``,
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
      <input
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
