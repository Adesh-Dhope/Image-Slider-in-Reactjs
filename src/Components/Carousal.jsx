import React, { useState } from "react";
import "./Carousel.css"; 
import html from '../Images/html.png';
import css from '../Images/css.webp';
import java from '../Images/javascript.png'
import react from '../Images/React.webp';
import Node from '../Images/nodejs.png';
import Mongo from '../Images/mongodb.png'


const Carousel = () => {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image sources (images stored locally in the public folder)
  const images = [
    html, css, java,react,Node, Mongo
  ];

  // Function to move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevImage}> Previous </button>
      
      <div className="carousel-images">
        <img src={images[currentIndex]} alt={`Carousel ${currentIndex}`} />
      </div>

      <button  className="carousel-button next" onClick={nextImage}>Next</button>
    </div>
  );
};

export default Carousel;
