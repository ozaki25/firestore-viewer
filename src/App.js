import React from 'react';
import styled from 'styled-components';
import useMessages from './hooks/useMessages';
import useImages from './hooks/useImages';

const Image = styled.img`
  max-height: 100px;
`;

function App() {
  const { messages, loading: messagesLoading } = useMessages();
  const { images, loading: imagesLoading } = useImages();
  return messagesLoading || imagesLoading ? (
    <p>...loading</p>
  ) : (
    <>
      <>
        {messages.length &&
          messages.map(message => (
            <p key={message.timestamp._nanoseconds}>{message.content}</p>
          ))}
      </>
      <>
        {images.length &&
          images.map(image => (
            <div key={image.timestamp._nanoseconds}>
              <Image src={image.url} alt={image.cap} />
              <p>{image.caption}</p>
              {image.comment && <p>{image.comment}</p>}
            </div>
          ))}
      </>
    </>
  );
}

export default App;
