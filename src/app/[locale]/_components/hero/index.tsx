import Image from "next/image";
import React from "react";
import Link from "../link";
import { getCurrentLang } from "@/lib/get-current-lang";
import getTrans from "@/lib/translation";
import { ROUTES } from "@/lib/types";
import {
  HeroImage,
  RectHero,
  VectorLeft,
  VectorRight,
} from "../../../../../public/images";

async function Hero() {
  const locale = await getCurrentLang();
  const { hero } = await getTrans(locale);
  return (
    <div className="container lg:min-h-screen-70 bg-green-100 w-full rounded-xl lg:rounded-[50px] shadow-2xl lg:grid grid-cols-1 lg:grid-cols-2  ">
      <div className="flex flex-col gap-2 lg:gap-3 items-start justify-center p-4 lg:p-8 h-full">
        <h1 className="text-2xl lg:text-5xl font-bold text-primary capitalize">
          {hero.welcome}
        </h1>

        <h2 className="text-xl lg:text-4xl font-bold text-green-800 capitalize">
          {hero.title}
        </h2>

        <p className="text-md lg:text-xl text-gray-600">{hero.description}</p>

        <div className="flex items-center gap-8 mt-5">
          <div className="flex flex-col gap-3">
            <p className="text-3xl font-bold text-green-800">50 +</p>
            <p>{hero.species} </p>
          </div>

          <div className="w-[2px] h-full bg-primary" />
          <div className="flex flex-col gap-3">
            <p className="text-3xl font-bold text-green-800">50 +</p>
            <p>{hero.customer} </p>
          </div>
        </div>

        <Link
          className="bg-green-800 text-white py-3 w-full lg:w-1/2 text-center uppercase hover:rounded-md mt-5 hover:bg-green-900 transition-all duration-150"
          href={ROUTES.PLANTS}
        >
          {hero.shop_now}
        </Link>
      </div>

      <div className="h-full relative hidden lg:block">
        <Image
          className="absolute bottom-0 lg:right-10 object-cover "
          src={RectHero}
          alt="hero"
          width={500}
          height={450}
        />

        <Image
          className="absolute bottom-0 lg:right-10 object-cover "
          src={HeroImage}
          alt="hero"
          width={500}
          height={400}
        />

        <Image
          className="hidden lg:block absolute bottom-28 left-[-5rem] object-cover"
          src={VectorLeft}
          alt="hero"
          width={200}
          height={200}
        />

        <Image
          className="hidden lg:block absolute top-5 right-10 object-cover"
          src={VectorRight}
          alt="hero"
          width={70}
          height={70}
        />
      </div>
    </div>
  );
}

export default Hero;
