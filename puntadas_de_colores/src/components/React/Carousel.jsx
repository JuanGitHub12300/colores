import React, { useState } from 'react';
import ArrowNext from './ArrowNext';
import ArrowPrevious from './ArrowPrevious';

const Carousel = () => {
  const images = [
    "/RopaFemenina/Img3.webp", 
    "/RopaFemenina/Img5.webp", 
    "/RopaFemenina/Img8.webp", 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const updateImage = (direction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    const newIndex = direction === "next"
      ? (currentIndex + 1) % images.length
      : (currentIndex - 1 + images.length) % images.length;
    
    setCurrentIndex(newIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleNextImage = () => updateImage("next");
  const handlePreviousImage = () => updateImage("prev");

  return (
    <div className="w-full md:w-4/12 px-4 mx-auto relative">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-600">
        <div className="w-full h-64 md:h-96 overflow-hidden relative">
          <img
            alt="Imagen de carrusel"
            src={images[currentIndex]}
            className={`w-full h-full object-cover rounded-t-lg transition-all duration-500 ease-in-out`}
            style={{
              opacity: isTransitioning ? '0.5' : '1'
            }}
          />
        </div>

        <blockquote className="relative p-8 mb-4">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 583 95"
            className="absolute left-0 w-full block"
            style={{ height: "95px", top: "-94px" }}
          >
            <polygon
              points="-30,95 583,95 583,65"
              className="text-pink-600 fill-current"
            />
          </svg>
          <h4 className="text-xl font-bold text-white mt-2">
            Ofrecemos a nuestros clientes
          </h4>
          <p className="text-md font-light mt-2 text-white">
            Vestidos de gala, ropa deportiva, blusas, atuendo formales.
          </p>
        </blockquote>

        <div className="absolute inset-0 flex items-center justify-between">
          <button
            onClick={handlePreviousImage}
            className="bg-white text-pink-600 p-2 rounded-full ml-4 hover:bg-pink-100 transition-colors duration-200"
            disabled={isTransitioning}
          >
            <ArrowPrevious />
          </button>
          <button
            onClick={handleNextImage}
            className="bg-white text-pink-600 p-2 rounded-full mr-4 hover:bg-pink-100 transition-colors duration-200"
            disabled={isTransitioning}
          >
            <ArrowNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;