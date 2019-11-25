import { useState, useEffect } from 'react';
import messagesApi from '../api/messagesApi';

const initialState = {
  messages: [],
  loading: false,
  error: '',
};

function useMessages() {
  const [state, setState] = useState(initialState);

  const fetchMessages = async () => {
    setState({ ...state, loading: true });
    const { messages, error } = await messagesApi.all();
    setState({ messages, loading: false, error });
  };

  const destoryMessage = async id => {
    setState({ ...state, loading: true });
    await messagesApi.destory(id);
    setState({ ...state, loading: false });
  };

  useEffect(() => {
    fetchMessages({});
  }, []);

  return { ...state, refetch: fetchMessages, destory: destoryMessage };
}

export default useMessages;
