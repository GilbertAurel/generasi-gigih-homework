import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from 'components/navbar';
import { PAGES } from 'utils/pages';
import LoginPage from 'pages/login';

export default function PageRouter() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          {PAGES.map((page) => (
            <Route
              key={page.name}
              exact={page.exact}
              path={page.path}
              component={page.component}
              isAuth={false}
            />
          ))}
        </Switch>
      </>
    </Router>
  );
}
