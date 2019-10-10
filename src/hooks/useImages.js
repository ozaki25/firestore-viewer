import { useState, useEffect } from 'react';
import imagesApi from '../api/imagesApi';

const initialState = {
  images: [],
  loading: false,
  error: '',
};

function useMessages() {
  const [state, setState] = useState(initialState);

  const fetchMessages = async () => {
    setState({ ...state, loading: true });
    const { images, error } = await imagesApi.findAll();
    setState({ images, loading: false, error });
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return { ...state, refetch: fetchMessages };
}

export default useMessages;
