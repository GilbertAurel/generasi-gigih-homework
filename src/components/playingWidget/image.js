/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function PlayingImage({ imageUrl }) {
  return (
    <img
      src={imageUrl}
      alt="Album img"
      css={css`
        grid-column: 1/2;
        grid-row: 1/2;
        height: 8rem;
        width: 8rem;
        object-fit: contain;
      `}
    />
  );
}
