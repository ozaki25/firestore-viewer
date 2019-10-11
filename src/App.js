import React from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import Menu from './components/Menu';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Menu />
    </ThemeProvider>
  );
}

export default App;
