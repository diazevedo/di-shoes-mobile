import React from 'react';
import Routes from './routes';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes></Routes>
    </>
  );
};

export default App;
