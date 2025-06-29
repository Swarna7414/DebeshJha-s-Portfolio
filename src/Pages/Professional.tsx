import React, { useState } from "react";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const slides = [
  {
    id: 1,
    text: "First slide",
    label: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    id: 2,
    text: "Second slide",
    label: "Second slide label",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    text: "Third slide",
    label: "Third slide label",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-transparent text-white transition-all duration-300">
        <h2 className="text-4xl font-bold mb-4">{slides[current].text}</h2>
        <h3 className="text-2xl font-semibold mb-2">{slides[current].label}</h3>
        <p className="text-base text-center max-w-2xl">{slides[current].description}</p>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-blue-400/70 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer text-4xl"
        >
          <IoMdArrowDropleftCircle/>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-blue-400/70 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer text-4xl"
        >
          <IoMdArrowDroprightCircle/>
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
