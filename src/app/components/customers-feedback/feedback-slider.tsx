"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface FeedbackProps {
  name: string;
  photo: string;
  testimonial: string;
}

const FeedbackSlider = ({ feedbacks }: { feedbacks: FeedbackProps[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative lg:w-full w-[90%] lg:max-w-4xl mx-auto overflow-hidden my-16">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="min-w-full py-6 bg-green-300 rounded-lg flex items-center justify-center flex-col lg:flex-row lg:flex lg:items-start lg:justify-around"
          >
            <Image
              src={feedback.photo}
              alt={feedback.name}
              width={150}
              height={150}
              className="rounded-full"
            />
            <div className="flex flex-col justify-start items-start lg:justify-start lg:items-start">
              <p className="font-semibold text-xl mb-4">{feedback.name}</p>
              <p className="text-gray-600">{feedback.testimonial}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {feedbacks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSlider;
