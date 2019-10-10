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

  useEffect(() => {
    fetchMessages();
  }, []);

  return { ...state, refetch: fetchMessages };
}

export default useMessages;
