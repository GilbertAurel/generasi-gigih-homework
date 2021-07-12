/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import { MENU_SELECTION } from "constants/dummyData";
import Navbar from "components/navbar";
import HandsonPage from "pages/handson";
import HomeworkPage from "pages/homework";

function App() {
  const [selectedMenu, setSelectedMenu] = useState(MENU_SELECTION[0]);

  const selectMenuHandler = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: 80px 1fr;
      `}
    >
      <Navbar
        selectedMenu={selectedMenu}
        selectMenuHandler={selectMenuHandler}
      />
      {selectedMenu === MENU_SELECTION[0] ? <HomeworkPage /> : <HandsonPage />}
    </div>
  );
}

export default App;
