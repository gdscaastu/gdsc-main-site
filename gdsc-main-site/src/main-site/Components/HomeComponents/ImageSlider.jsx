import React from "react";
import { useState } from "react";
import pic1 from "../../../assets/SliderImages/photo2.jpeg";
import pic2 from "../../../assets/SliderImages/photo3.jpeg";
import pic3 from "../../../assets/SliderImages/photo1.jpeg";
import pic4 from "../../../assets/SliderImages/photo1.jpeg";
import pic5 from "../../../assets/SliderImages/diversity.jpeg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [pic5, pic2, pic3, pic4, pic1];

  const prev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const next = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="flex w-[92%] h-80 lg:w-[42%] gap-1 items-center justify-center relative bg-white border border-gray-200 p-7 rounded-lg shadow-right-bottom lg:ml-4 ml-3">
      <button
        onClick={prev}
        className="absolute left-0 transform -translate-x-1/2">
        <svg
          data-accordion-icon=""
          className="h-6 w-6 shrink-0 rotate-90 bg-green-400 rounded-full"
          fill="#fff"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="w-10/12 h-72 lg:h-64 relative rounded-lg self-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`absolute top-0 left-0 w-full h-64 rounded-lg transition-opacity duration-1000 ${
              index === currentIndex ? "" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <button
        onClick={next}
        className="absolute right-0 transform translate-x-1/2">
        <svg
          data-accordion-icon=""
          className="h-6 w-6  bg-green-400 rounded-full"
          style={{ transform: "rotate(270deg)" }}
          fill="#fff"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
export default Slider;
