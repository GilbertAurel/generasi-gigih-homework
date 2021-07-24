/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS, FONTS } from "constants/theme";
import { MENU_SELECTION, SIGN_OUT_TEXT } from "constants/dummyData";

export default function Menu({ selectMenuHandler, logoutHandler }) {
  const styles = {
    container: css`
      display: flex;
      flex-direction: row;
      gap: 100px;

      @media (max-width: 1600px) {
        visibility: hidden;
      }
    `,
    button: css`
      margin: 0;
      padding: 0;
      font-family: "Noto Sans", sans-serif;
      font-size: ${FONTS.BODY};
      cursor: pointer;
      transition: color 0.6s;
      color: ${COLORS.BTN_NOT_ACTIVE_DARK};

      :hover {
        color: ${COLORS.BTN_ACTIVE_DARK};
      }
    `,
  };

  return (
    <div css={styles.container}>
      {MENU_SELECTION.map((menu, index) => (
        <p
          key={index}
          onClick={() => selectMenuHandler(menu)}
          css={styles.button}
        >
          {menu}
        </p>
      ))}
      <p onClick={logoutHandler} css={styles.button}>
        {SIGN_OUT_TEXT}
      </p>
    </div>
  );
}
