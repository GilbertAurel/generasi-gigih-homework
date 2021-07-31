import React from 'react';
import { Redirect, Router } from 'react-router-dom';

export const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => (
  <Router
    {...rest}
    render={(props) => {
      if (isAuth) {
        return <Component {...props} />;
      }

      return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
    }}
  />
);
