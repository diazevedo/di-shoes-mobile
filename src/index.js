import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import store from './store/index';

import { StatusBar } from 'react-native';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Routes></Routes>
    </Provider>
  );
};

export default App;
