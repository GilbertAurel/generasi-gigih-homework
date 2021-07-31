import React from "react";
import { Provider } from "react-redux";
import rootReducer from "store/reducers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "components";
import { PAGES } from "constants/pages";

const store = rootReducer;

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
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
        </>
      </Router>
    </Provider>
  );
}
