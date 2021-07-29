/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Provider } from "react-redux";
import rootReducer from "redux/reducers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { COLORS } from "constants/theme";

import { Navbar } from "components";
import { PAGES } from "constants/pages";

const store = rootReducer;

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div
          css={css`
            background-color: ${COLORS.BG_DARK};
          `}
        >
          <Navbar />
          <Switch>
            {PAGES.map((page, pageIdx) => {
              const PageComponent = page.component;
              return (
                <Route key={pageIdx} exact={page.exact} path={page.path}>
                  <PageComponent />
                </Route>
              );
            })}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
