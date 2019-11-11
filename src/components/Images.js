import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Button, Box, Link, Image, Stack, Text } from '@chakra-ui/core';
import useImages from '../hooks/useImages';
import Loading from './Loading';

function ImageItem({ image, destory }) {
  const onClickDestory = e => {
    e.preventDefault();
    if (window.confirm('削除しますか？')) destory(image.id);
  };

  return (
    <Stack align="center">
      <Box maxW="sm" borderWidth="1px" rounded="lg" mt={2}>
        <Link href={image.url} isExternal>
          <Image src={image.url} alt={image.caption} />
        </Link>
        <Box p="3">
          <Text color="gray.700">{image.caption}</Text>
          {image.comment && <p>{image.comment}</p>}
          <Button
            width="100%"
            size="sm"
            mt={2}
            variant="outline"
            variantColor="orange"
            onClick={onClickDestory}
          >
            削除
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}

function Images() {
  const { images: newImages, destory, refetch } = useImages();
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const onNext = () => {
    refetch({
      startAfterId: images[images.length - 1].id,
    });
  };

  const onClickDestory = async id => {
    await destory(id);
    setImages(images.filter(i => i.id !== id));
  };

  useEffect(() => {
    console.log({ newImages, images });
    if (newImages.length) {
      setHasMore(true);
      setImages([...images, ...newImages]);
    } else {
      setHasMore(false);
    }
  }, [newImages]);

  return images.length ? (
    <InfiniteScroll
      dataLength={images.length}
      hasMore={hasMore}
      next={onNext}
      loader={<Loading />}
    >
      {images.map(image => (
        <ImageItem key={image.id} image={image} destory={onClickDestory} />
      ))}
    </InfiniteScroll>
  ) : (
    <Loading />
  );
}

export default Images;
