import React from 'react';
import { Provider } from 'react-redux';
import rootReducer from 'store/reducers';
import Router from 'components/router';

const store = rootReducer;

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
