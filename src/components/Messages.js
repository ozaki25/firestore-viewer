import React from 'react';
import useMessages from '../hooks/useMessages';
import { Link } from '@chakra-ui/core';

function Message({ message, destory }) {
  const onClickDestory = e => {
    e.preventDefault();
    destory(message.id);
  };
  return (
    <p>
      {message.content}
      <Link href="#" onClick={onClickDestory}>
        削除
      </Link>
    </p>
  );
}

function Messages() {
  const { messages, loading, destory } = useMessages();

  return messages.length
    ? messages.map(message => (
        <Message key={message.id} message={message} destory={destory} />
      ))
    : null;
}

export default Messages;
