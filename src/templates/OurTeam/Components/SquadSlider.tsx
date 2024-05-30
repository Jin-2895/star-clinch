import Image from "next/image";
import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const images = ["./frame.png", "./frame.png", "./frame.png"];

const SquadSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-[80rem] mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              width={800}
              height={800}
              src={image}
              alt={`Slide ${index}`}
              className={`w-full transition-transform duration-500 ${index === currentIndex ? "block" : "hidden"}`}
            />
            {index === currentIndex && (
              <div className="">
                <div className="text-center mt-4 max-w-xl">
              <h3 className="text-xl font-bold">Design Dynamos</h3>
              <p className="text-gray-500">
                The artists behind the visuals. These design superheroes bring
                ideas to life, painting our projects with creativity and
                imagination.
              </p>
              <a href="#" className="text-blue-500">
                Our design team is growing. Apply Now
              </a>
            </div>
              </div>
            )}
            
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          onClick={prevSlide}
          className="p-2 bg-gray-800 bg-opacity-50 rounded-full"
        >
          <FaArrowAltCircleLeft size={30} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-gray-800 bg-opacity-50 rounded-full"
        >
          <FaArrowAltCircleRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default SquadSlider;
