import React from 'react';
import { Button, List, ListItem, ListIcon } from '@chakra-ui/core';
import useMessages from '../hooks/useMessages';
import Loading from './Loading';

function Message({ message, destory }) {
  const onClickDestory = e => {
    e.preventDefault();
    if (window.confirm('削除しますか？')) destory(message.id);
  };
  return (
    <List>
      <ListItem p={1}>
        <ListIcon icon="chevron-right" color="orange.500" />
        {message.content}
        <Button
          ml={2}
          size="sm"
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
  const { messages, destory, refetch } = useMessages();

  const onClickDestory = async id => {
    await destory(id);
    await refetch();
  };

  return (
    <>
      <Button mt={2} size="sm" variant="outline" width="100%" onClick={refetch}>
        更新
      </Button>
      {messages.length ? (
        messages.map(message => (
          <Message
            key={message.id}
            message={message}
            destory={onClickDestory}
          />
        ))
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Messages;
