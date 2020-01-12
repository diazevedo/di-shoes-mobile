import React from 'react';
import Routes from './routes';
import { StatusBar } from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Routes></Routes>
    </>
  );
};

export default App;
