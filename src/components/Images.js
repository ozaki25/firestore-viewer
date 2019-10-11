import React from 'react';
import { Button, Box, Image, Stack, Text } from '@chakra-ui/core';
import useImages from '../hooks/useImages';

function ImageItem({ image, destory }) {
  const onClickDestory = e => {
    e.preventDefault();
    if (window.confirm('削除しますか？')) destory(image.id);
  };

  return (
    <Stack align="center">
      <Box maxW="sm" borderWidth="1px" rounded="lg" mt={2}>
        <Image src={image.url} alt={image.caption} />
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
  const { images, loading, destory } = useImages();

  return images.length
    ? images.map(image => (
        <ImageItem key={image.id} image={image} destory={destory} />
      ))
    : null;
}

export default Images;
