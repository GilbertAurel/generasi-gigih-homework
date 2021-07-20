/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { COLORS, FONTS } from "constants/theme";
import { APP_NAME } from "constants/dummyData";
import ICONS from "assets/icons";

export default function Title() {
  return (
    <div
      css={css`
        cursor: default;
      `}
    >
      <h1
        css={css`
          margin: 0;
          padding: 0;
          font-family: "Noto Sans", sans-serif;
          font-size: ${FONTS.MENU};
          color: ${COLORS.PRIMARY};
        `}
      >
        {APP_NAME}
      </h1>
    </div>
  );
}
