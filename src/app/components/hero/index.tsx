import Image from "next/image";
import React from "react";
import Link from "../link";
import { ROUTES } from "../conistant/enum";

const Hero = () => {
  return (
    <div className="container lg:min-h-screen-70 bg-green-100 w-full rounded-xl lg:rounded-[50px] shadow-2xl lg:grid grid-cols-1 lg:grid-cols-2  ">
      <div className="flex flex-col gap-2 lg:gap-3 items-start justify-center p-4 lg:p-8 h-full">
        <h1 className="text-2xl lg:text-5xl font-bold text-primary capitalize">
          Welcome to our store,
        </h1>

        <h2 className="text-xl lg:text-4xl font-bold text-green-800 capitalize">
          Buy your dream plants
        </h2>

        <p className="text-md lg:text-xl text-gray-600">
          Our environment, the world in which we live and work, is a mirror of
          our attitudes and expectations.!
        </p>

        <div className="flex items-center gap-8 mt-5">
          <div className="flex flex-col gap-3">
            <p className="text-3xl font-bold text-green-800">50 +</p>
            <p>Plants Species </p>
          </div>

          <div className="w-[2px] h-full bg-primary" />
          <div className="flex flex-col gap-3">
            <p className="text-3xl font-bold text-green-800">50 +</p>
            <p>Customer </p>
          </div>
        </div>

        <Link
          className="bg-green-800 text-white py-3 w-full lg:w-1/2 text-center uppercase hover:rounded-md mt-5 hover:bg-green-900 transition-all duration-150"
          href={ROUTES.PLANTS}
        >
          Shop Now
        </Link>
      </div>

      <div className="h-full relative hidden lg:block">
        <Image
          className="absolute bottom-0 lg:right-10 object-cover "
          src="/images/Rectangle 2.png"
          alt="hero"
          width={500}
          height={450}
        />

        <Image
          className="absolute bottom-0 lg:right-10 object-cover "
          src="/images/unsplash_cLaaxa4DSnc-removebg-preview 1.png"
          alt="hero"
          width={500}
          height={400}
        />

        <Image
          className="hidden lg:block absolute bottom-28 left-[-5rem] object-cover"
          src="/images/Vector 186.png"
          alt="hero"
          width={200}
          height={200}
        />

        <Image
          className="hidden lg:block absolute top-5 right-10 object-cover"
          src="/images/Vector 187.png"
          alt="hero"
          width={70}
          height={70}
        />
      </div>
    </div>
  );
};

export default Hero;
