"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface FeedbackProps {
  name: string;
  photo: string;
  testimonial: string;
}

const FeedbackSlider = ({ feedbacks }: { feedbacks: FeedbackProps[] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings} className=" mb-8 w-[90%] lg:w-[60%] mx-auto">
      {feedbacks.map((feedback, index) => (
        <div key={index} className="py-6 px-4 bg-green-300 rounded-xl">
          <div className="flex flex-row items-center justify-evenly gap-6">
            <Image
              src={feedback.photo}
              alt={feedback.name}
              width={150}
              height={150}
              className="rounded"
            />
            <div className="flex flex-col justify-center items-center">
              <p className="font-semibold text-xl mb-2">{feedback.name}</p>
              <p className="text-gray-700">{feedback.testimonial}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FeedbackSlider;
