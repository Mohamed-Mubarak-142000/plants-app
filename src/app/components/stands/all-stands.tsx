import React from "react";
import StandList from "./stand-list";

const AllStands = () => {
  const allStand = [
    {
      id: 1,
      image: "/images/image 5.png",
    },
    {
      id: 2,
      image: "/images/image 6.png",
    },
    {
      id: 3,
      image: "/images/image 7.png",
    },
  ];
  return (
    <div className="w-full bg-green-200 my-20 min-h-screen-75">
      <StandList allStand={allStand} />
    </div>
  );
};

export default AllStands;
