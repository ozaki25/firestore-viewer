import React from 'react';
import { CircularProgress, Stack } from '@chakra-ui/core';

function Loading() {
  return (
    <Stack align="center">
      <CircularProgress color="orange" isIndeterminate />
    </Stack>
  );
}

export default Loading;
