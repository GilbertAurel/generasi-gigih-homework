import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "components";
import { PAGES } from "utils/pages";
import { useSelector } from "react-redux";

export default function PageRouter() {
  const token = useSelector((store) => store.userState.token);

  useEffect(() => {
    if (token) {
      console.log(token);
    }
  }, [token]);

  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          {PAGES.map((page, pageIdx) => (
            <Route
              key={pageIdx}
              exact={page.exact}
              path={page.path}
              component={page.component}
            />
          ))}
        </Switch>
      </>
    </Router>
  );
}
