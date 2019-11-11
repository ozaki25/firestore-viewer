import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
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
  const { messages: newMessages, destory, refetch } = useMessages();
  const [messages, setMessages] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const onNext = () => {
    refetch({
      startAfterId: messages[messages.length - 1].id,
    });
  };

  const onClickDestory = async id => {
    await destory(id);
    setMessages(messages.filter(m => m.id !== id));
  };

  useEffect(() => {
    console.log({ newMessages, messages });
    if (newMessages.length) {
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
      loader={<Loading />}
    >
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
    </InfiniteScroll>
  );
}

export default Messages;
