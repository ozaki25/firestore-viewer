import React from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import Menu from './components/Menu';

function App() {
  const loading = false;
  return (
    <ThemeProvider>
      <CSSReset />
      {loading ? <p>...loading</p> : <Menu />}
    </ThemeProvider>
  );
}

export default App;
