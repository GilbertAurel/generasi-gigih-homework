/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "constants/theme";

import { msToMinutesConverter } from "constants/converter";
import ICONS from "assets/icons";
import MenuBar from "./menuBar";

export default function SongCard(props) {
  const { songData, changeSongHandler, selected, setToggleMenu, openMenu } =
    props;

  const toggleMenuHandler = () => {
    setToggleMenu((prevData) => (prevData === songData.id ? "" : songData.id));
  };

  const containerStyle = css`
    display: grid;
    grid-template-columns: 10% 40% 25% 10% auto;
    align-items: center;
    gap: 1rem;
    position: relative;

    img {
      height: 3rem;
      width: 3rem;
      object-fit: cover;
    }

    p {
      flex: 1;
      margin: 0;
      padding: 0;
      font-family: "Noto Sans", sans-serif;
      font-size: ${FONTS.CONTENT};
      cursor: default;
      color: ${selected ? COLORS.PRIMARY : COLORS.TEXT_BRIGHT};
    }
  `;

  return (
    <div css={containerStyle}>
      <img src={songData.album.images[2].url} alt="" />
      <p onClick={() => changeSongHandler(songData)}>{songData.name}</p>
      <p>{songData.artists[0].name}</p>
      <p>{msToMinutesConverter(songData.duration_ms)}</p>
      <img
        src={ICONS.MORE}
        alt="menu icon"
        onClick={toggleMenuHandler}
        css={css`
          transform: scale(0.4);
        `}
      />
      {openMenu && <MenuBar />}
    </div>
  );
}
