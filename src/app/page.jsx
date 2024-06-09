"use client";

import React from 'react';
import Gallery from './components/Gallery';
import GalleryItem from './components/GalleryItem';
import { galleryData } from '@/data/data';
const Home = () => {
  return (
    <Gallery>
      {galleryData.map((item, index) => (
        <GalleryItem
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </Gallery>
  );
};

export default Home;