import React from 'react';

import AppProvider from './src/hooks'

import Home from './src/pages/Home';

export default function App() {
  return (
      <AppProvider>
        <Home />
      </AppProvider>
  );
}