import React from 'react';
import useMessages from '../hooks/useMessages';
import { Button, List, ListItem, ListIcon } from '@chakra-ui/core';

function Message({ message, destory }) {
  const onClickDestory = e => {
    e.preventDefault();
    if (window.confirm('削除しますか？')) destory(message.id);
  };
  return (
    <List mb={2}>
      <ListItem>
        <ListIcon icon="chevron-right" color="orange.500" />
        {message.content}
        <Button
          ml={2}
          variant="link"
          variantColor="orange"
          onClick={onClickDestory}
        >
          削除
        </Button>
      </ListItem>
    </List>
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
