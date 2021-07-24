/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "constants/theme";

import { msToMinutesConverter } from "constants/converter";
import ICONS from "assets/icons";
import MenuBar from "./menuBar";

export default function SongCard(props) {
  const { songData, changeSongHandler, selected, menuHandler, openMenu } =
    props;

  const styles = {
    container: css`
      display: grid;
      grid-template-columns: 10% 40% 25% 10% auto;
      align-items: center;
      gap: 1rem;
      position: relative;
    `,
    albumImage: css`
      height: 3rem;
      width: 3rem;
      object-fit: cover;
    `,
    label: css`
      flex: 1;
      margin: 0;
      padding: 0;
      font-family: "Noto Sans", sans-serif;
      font-size: ${FONTS.CONTENT};
      cursor: default;
      color: ${selected ? COLORS.PRIMARY : COLORS.TEXT_BRIGHT};
    `,
    menuButton: css`
      transform: scale(0.6);
    `,
  };

  const song = {
    id: songData.id,
    image: songData.album.images[2].url,
    title: songData.name,
    artist: songData.artists[0].name,
    length: msToMinutesConverter(songData.duration_ms),
  };

  return (
    <div css={styles.container}>
      <img css={styles.albumImage} src={song.image} alt="album image" />
      <p css={styles.label} onClick={() => changeSongHandler(songData)}>
        {song.title}
      </p>
      <p css={styles.label}>{song.artist}</p>
      <p css={styles.label}>{song.length}</p>
      <img
        src={ICONS.MORE}
        alt="menu icon"
        onClick={() => menuHandler(song.id)}
        css={styles.menuButton}
      />
      {openMenu && <MenuBar />}
    </div>
  );
}
