import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@chakra-ui/core';
import useImages from '../hooks/useImages';

const StyledImage = styled.img`
  max-height: 100px;
`;

function Image({ image, destory }) {
  const onClickDestory = e => {
    e.preventDefault();
    destory(image.id);
  };

  return (
    <div key={image.id}>
      <StyledImage src={image.url} alt={image.cap} />
      <Link href="#" onClick={onClickDestory}>
        削除
      </Link>
      <p>{image.caption}</p>
      {image.comment && <p>{image.comment}</p>}
    </div>
  );
}

function Images() {
  const { images, loading, destory } = useImages();

  return images.length
    ? images.map(image => <Image image={image} destory={destory} />)
    : null;
}

export default Images;
