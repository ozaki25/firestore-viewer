import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Button, List, ListItem, ListIcon } from '@chakra-ui/core';
import useMessages from '../hooks/useMessages';

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
  const { messages: newMessages, loading, destory, refetch } = useMessages();
  const [messages, setMessages] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const onNext = () => {
    refetch({
      startAfterId: messages[messages.length - 1].id,
    });
  };

  useEffect(() => {
    console.log({ newMessages, messages });
    if (newMessages) {
      setHasMore(true);
      setMessages([...messages, ...newMessages]);
    } else {
      setHasMore(false);
    }
  }, [newMessages]);

  return (
    <InfiniteScroll
      dataLength={messages.length}
      hasMore={hasMore}
      next={onNext}
      loader={<p>...loading</p>}
    >
      {messages.length ? (
        messages.map(message => (
          <Message key={message.id} message={message} destory={destory} />
        ))
      ) : (
        <div />
      )}
    </InfiniteScroll>
  );
}

export default Messages;
