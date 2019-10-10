import React from 'react';
import styled from 'styled-components';
import useMessages from './hooks/useMessages';
import useImages from './hooks/useImages';

const Image = styled.img`
  max-height: 100px;
`;

function App() {
  const {
    messages,
    loading: messagesLoading,
    destory: destoryMessage,
  } = useMessages();
  const { images, loading: imagesLoading, destory: destoryImage } = useImages();

  const onClickDeleteMessage = id => destoryMessage(id);

  const onClickDeleteImage = id => destoryImage(id);

  return messagesLoading || imagesLoading ? (
    <p>...loading</p>
  ) : (
    <>
      <>
        {messages.length &&
          messages.map(message => (
            <p key={message.id}>
              {message.content}
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  onClickDeleteMessage(message.id);
                }}
              >
                削除
              </a>
            </p>
          ))}
      </>
      <>
        {images.length &&
          images.map(image => (
            <div key={image.id}>
              <Image src={image.url} alt={image.cap} />
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  onClickDeleteImage(image.id);
                }}
              >
                削除
              </a>
              <p>{image.caption}</p>
              {image.comment && <p>{image.comment}</p>}
            </div>
          ))}
      </>
    </>
  );
}

export default App;
