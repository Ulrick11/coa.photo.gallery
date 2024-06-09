import React from 'react';
import styled from 'styled-components';
const ItemContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ItemDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${ItemContainer}:hover & {
    opacity: 1;
  }
`;

const ItemTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const ItemDescription = styled.p`
  margin: 4px 0 0;
  font-size: 14px;
`;

const GalleryItem = ({ title, description, imageUrl }) => {
  return (
    <ItemContainer>
      <ItemImage src={imageUrl} alt={title} />
      <ItemDetails>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemDetails>
    </ItemContainer>
  );
};

export default GalleryItem;