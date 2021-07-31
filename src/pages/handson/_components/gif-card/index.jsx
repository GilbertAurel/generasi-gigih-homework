/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function GifCard({ url }) {
  const styles = {
    container: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    image: css`
      height: 19rem;
      width: 19rem;
      object-fit: contain;
      justify-self: center;
    `,
  };

  return (
    <div css={styles.container}>
      <img src={url} alt="gif" css={styles.image} />
    </div>
  );
}
