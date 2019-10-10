import React from 'react';
import useMessages from '../hooks/useMessages';
import { Link } from '@chakra-ui/core';

function Messages() {
  const { messages, loading, destory } = useMessages();

  const onClickDeleteMessage = id => destory(id);

  return messages.length
    ? messages.map(message => (
        <p key={message.id}>
          {message.content}
          <Link
            href="#"
            onClick={e => {
              e.preventDefault();
              onClickDeleteMessage(message.id);
            }}
          >
            削除
          </Link>
        </p>
      ))
    : null;
}

export default Messages;
