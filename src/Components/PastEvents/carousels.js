import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';
const ImageCarousel = ({ images }) => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} stopOnHover={true} className='MyCarousel'>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image}  className='ITEMS' alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
