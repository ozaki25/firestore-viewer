import { useState, useEffect } from 'react';
import imagesApi from '../api/imagesApi';

const initialState = {
  images: [],
  loading: false,
  error: '',
};

function useImages() {
  const [state, setState] = useState(initialState);

  const fetchImages = async () => {
    setState({ ...state, loading: true });
    const { images, error } = await imagesApi.all();
    setState({ images, loading: false, error });
  };

  const destoryImage = async id => {
    setState({ ...state, loading: true });
    await imagesApi.destory(id);
    await fetchImages();
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return { ...state, refetch: fetchImages, destory: destoryImage };
}

export default useImages;
