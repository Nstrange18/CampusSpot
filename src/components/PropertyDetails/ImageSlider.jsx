import React from 'react'
import { useState } from 'react';
const ImageSlider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyles = {
    height: '100%',
    position: 'relative',
  }
  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '70px',
    fontSize: '30px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
  }
  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '70px',
    fontSize: '30px',
    color: 'white',
    cursor: 'pointer',
    zIndex: 1,
    // zIndex: 1,
    // cursor: 'pointer',
  }
  const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // borderRadius: '10px',
  }
  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',

  }
  const dotStyles = {
    margin: '0 3px',
    cursor: 'pointer',
    fontSize: '20px',
  }
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  const goToPrevious = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  setCurrentIndex(newIndex);
};

const goToNext = () => {
  const isLastSlide = currentIndex === slides.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
};

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>◀️</div>
      <div style={rightArrowStyles} onClick={goToNext}>▶️</div>
      <div
      style={slideStyles}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>⚫️</div>
        ))}
      </div>
    </div>
  )
};

export default ImageSlider
