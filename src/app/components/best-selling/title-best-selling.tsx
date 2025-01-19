import React from "react";
import Link from "../link";
import { ROUTES } from "../conistant/enum";

const TitleBestSelling = () => {
  return (
    <div className="flex items-center justify-between my-10">
      <div className="flex flex-row justify-between lg:flex-col items-center lg:items-start">
        <h2 className="text-3xl font-bold">Best Selling Plants</h2>
        <p className="text-gray-600 hidden lg:block">
          Easiest way to healthy life by buying your favorite plants.
        </p>
      </div>

      <Link
        href={ROUTES.PRODUCTS}
        className="text-white bg-green-800 py-3 px-6 hover:bg-green-900 transition-all duration-150"
      >
        See more
      </Link>
    </div>
  );
};

export default TitleBestSelling;
