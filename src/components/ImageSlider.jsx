import React, { useState, useEffect } from "react";
import interiorImage from "../assets/template_photo_1.jpg";
import interiorImage2 from "../assets/template_photo_2.jpg";
import interiorImage3 from "../assets/template_photo_3.jpg";

const ImageSlider = () => {
  const images = [interiorImage, interiorImage2, interiorImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="m-4"> {/* Added small margin */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] overflow-hidden rounded-lg">

        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt="slide"
              className="w-full h-full object-cover rounded-lg transition-transform duration-700 ease-in-out hover:scale-105 hover:contrast-125"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}

        

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 text-3xl sm:text-4xl text-white bg-black/40 hover:bg-black/60 p-1 sm:p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 text-3xl sm:text-4xl text-white bg-black/40 hover:bg-black/60 p-1 sm:p-2 rounded-full"
        >
          &#10095;
        </button>

        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                currentIndex === i ? "bg-orange-500" : "bg-gray-400 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
