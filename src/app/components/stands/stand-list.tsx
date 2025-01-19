import React from "react";
import StandItem from "./stand-item";
import Link from "../link";
import { ROUTES } from "../conistant/enum";
import { ArrowRight } from "lucide-react";

interface StandListProps {
  image: string;
  id: number;
}
const StandList = ({ allStand }: { allStand: StandListProps[] }) => {
  return (
    <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-16">
      {allStand.map((stand) => (
        <StandItem key={stand.id} image={stand.image} />
      ))}
      <div className=" flex items-center justify-start">
        <Link
          href={ROUTES.PRODUCTS}
          className="w-full flex items-center justify-start gap-2  py-3 px-6 transition-all duration-150"
        >
          See more <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default StandList;
