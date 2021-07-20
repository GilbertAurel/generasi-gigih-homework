/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS } from "constants/theme";

import Title from "./title";
import Footer from "./footer";
import Background from "./background";

function Index() {
  return (
    <div
      css={css`
        min-height: 100vh;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(5, 1fr);
        background-color: ${COLORS.BG_DARK};

        box-sizing: border-box;
        position: relative;
        overflow: hidden;
      `}
    >
      <Title />
      <Footer />
      <Background />
    </div>
  );
}

export default Index;
