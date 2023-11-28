
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import database from '../../store/database';

function CustomCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = database.carousel.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, totalSlides]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <Carousel
        autoPlay={false}
        showThumbs={false}
        onChange={handleSlideChange}
        selectedItem={currentSlide}
      >
        {database.carousel.map((slide) => (
          <div key={slide.id}>
            <img src={slide.imageUrl} alt={slide.altText} />
          </div>
        ))}
      </Carousel>
      <div className="progress-bar">
        {database.carousel.map((_, index) => (
          <div
            key={index}
            className={`progress-bar-item ${currentSlide === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
const carousel = {
    position: 'relative',
    textAlign: 'center',
    overflow: 'hidden',
    height: '50vh', 
  };

  

export default CustomCarousel;