import { Box, Flower2, PhoneCall } from "lucide-react";
import React from "react";
import CardAbout from "./card-about-us";

const AboutUs = () => {
  const dataAboutUs = [
    {
      id: 1,
      icon: <Flower2 width={30} height={30} />,
      title: "Large Assortment",
      content:
        "we offer many different types of products with fewer variations in each category.",
    },
    {
      id: 2,
      icon: <Box width={30} height={30} />,
      title: "Fast & Free Shipping",
      content:
        "4-day or less delivery time, free shipping and an expedited delivery option.",
    },
    {
      id: 3,
      icon: <PhoneCall width={30} height={30} />,
      title: "24/7 Support",
      content: "answers to any business related inquiry 24/7 and in real-time.",
    },
  ];
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
      {dataAboutUs.map((item) => (
        <CardAbout key={item.id} item={item} />
      ))}
    </div>
  );
};

export default AboutUs;
