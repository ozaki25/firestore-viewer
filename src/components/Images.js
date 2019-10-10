import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@chakra-ui/core';
import useImages from '../hooks/useImages';

const Image = styled.img`
  max-height: 100px;
`;

function Images() {
  const { images, loading, destory } = useImages();

  const onClickDeleteImage = id => destory(id);

  return images.length
    ? images.map(image => (
        <div key={image.id}>
          <Image src={image.url} alt={image.cap} />
          <Link
            href="#"
            onClick={e => {
              e.preventDefault();
              onClickDeleteImage(image.id);
            }}
          >
            削除
          </Link>
          <p>{image.caption}</p>
          {image.comment && <p>{image.comment}</p>}
        </div>
      ))
    : null;
}

export default Images;
