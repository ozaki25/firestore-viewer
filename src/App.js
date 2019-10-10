import React from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import Messages from './components/Messages';
import Images from './components/Images';

function App() {
  const loading = false;
  return (
    <ThemeProvider>
      <CSSReset />
      {loading ? (
        <p>...loading</p>
      ) : (
        <>
          <Messages />
          <Images />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
