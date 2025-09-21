import React, { useState } from 'react';
import interiorImage from '../assets/template_photo_1.jpg'; 
import interiorImage2 from '../assets/template_photo_2.jpg'; 
import interiorImage3 from '../assets/template_photo_3.jpg'; 


const ImageSlider = () => {
  const images = [
    interiorImage, // Replace with your actual image URLs
    
    interiorImage2,
    interiorImage3,
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] bg-black text-white overflow-hidden">
      {/* Image and Content */}
      
        {/* Image */}
        <div>
          <img
            src={images[currentIndex]}
            alt="slide"
            className="w-full h-full object-cover"
          />
        
        {/* Text and Button */}
        {/* <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Welcome to IndianPaints</h1>
          <p className="text-lg md:text-xl mt-4">India's Most Trusted Paint Brand</p>
          <button className="mt-8 py-2 px-6 bg-orange-500 text-white rounded hover:bg-orange-400 transition duration-300">
            Explore Now
          </button>
        </div>*/}
      </div> 

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl text-white bg-black bg-opacity-50 p-2 md:p-4 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl text-white bg-black bg-opacity-50 p-2 md:p-4 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        &#10095;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 bg-gray-400 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? 'bg-orange-500' : 'hover:bg-gray-500'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
