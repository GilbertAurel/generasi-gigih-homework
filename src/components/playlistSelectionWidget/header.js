/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { COLORS, FONTS } from "constants/theme";

export default function Header({ setOpenSearchBar }) {
  const searchButtonToggle = () => {
    setOpenSearchBar((prevState) => !prevState);
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        gap: 1rem;

        h1:nth-of-type(1) {
          margin: 0;
          padding: 0;
          font-family: "Noto Sans", sans-serif;
          font-size: ${FONTS.BODY};
          color: ${COLORS.PRIMARY};
        }

        h1:nth-of-type(2) {
          margin: 0;
          padding: 0;
          font-family: "Noto Sans", sans-serif;
          font-size: ${FONTS.BODY};
          font-weight: 500;
          color: ${COLORS.GRAY};
          cursor: pointer;
        }
      `}
    >
      <h1>My Playlist</h1>
      <h1 onClick={searchButtonToggle}>search</h1>
    </div>
  );
}
