import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Gallery = ({ children }) => {
  return <GalleryContainer>{children}</GalleryContainer>;
};

export default Gallery;