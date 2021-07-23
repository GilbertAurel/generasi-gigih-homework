/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Header from "./header";
import PlaylistList from "./playlistList";

export default function Index(props) {
  return (
    <div
      css={css`
        display: grid;
        grid-template-rows: repeat(auto-fill, 1fr);
        grid-auto-rows: min-content;
        gap: 1rem;
        z-index: 1000;
      `}
    >
      <Header setOpenSearchBar={props.setOpenSearchBar} />
      <PlaylistList {...props} />
    </div>
  );
}
