import { useState, useEffect } from 'react';
import imagesApi from '../api/imagesApi';

const initialState = {
  images: [],
  loading: false,
  error: '',
};

function useImages() {
  const [state, setState] = useState(initialState);

  const fetchImages = async ({ startAfterId }) => {
    setState({ ...state, loading: true });
    const { images, error } = await imagesApi.all({ startAfterId });
    setState({ images, loading: false, error });
  };

  const destoryImage = async id => {
    setState({ ...state, loading: true });
    await imagesApi.destory(id);
    setState({ ...state, loading: false });
  };

  useEffect(() => {
    fetchImages({});
  }, []);

  return { ...state, refetch: fetchImages, destory: destoryImage };
}

export default useImages;
