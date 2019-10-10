import React from 'react';
import useMessages from './hooks/useMessages';

function App() {
  const { messages, loading } = useMessages();
  return loading ? (
    <p>...loading</p>
  ) : (
    messages.map(message => (
      <p key={message.timestamp._nanoseconds}>{message.content}</p>
    ))
  );
}

export default App;
