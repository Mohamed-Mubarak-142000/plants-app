import Image from "next/image";
import React from "react";
import Link from "../link";
import { ArrowRight } from "lucide-react";
import TitleSection from "../title-section/title-section";
import getTrans from "@/lib/translation";
import { getCurrentLang } from "@/lib/get-current-lang";
import { ROUTES } from "@/lib/types";

const ImageCat1 = "/images/Frame 36.png";
const ImageCat2 = "/images/Frame 37.png";
const ImageCat3 = "/images/Frame 38.png";
async function AllCategories() {
  const locale = await getCurrentLang();
  const { categories } = await getTrans(locale);
  return (
    <>
      <TitleSection title={categories.title} subtitle={categories.subtitle} />

      <div className="w-full bg-green-200 my-20 min-h-screen-85">
        <div className="container relative">
          <div className=" w-full lg:absolute lg:left-0 lg:top-[-30px] lg:w-[350px] lg:min-h-[500px]">
            <Image
              src={ImageCat1}
              alt=""
              width={350}
              height={500}
              className="w-full h-[300px] lg:h-[500px]"
            />
            <h3 className="text-xl font-bold py-5 text-center">
              {categories.natural}
            </h3>
          </div>
          <div className=" w-full lg:absolute lg:left-[50%] lg:top-[50%] lg:translate-x-[-50%] lg:translate-y-[10%] lg:w-[350px] lg:h-[650px] ">
            <Image
              src={ImageCat3}
              alt=""
              width={350}
              height={400}
              className="w-full h-[300px] lg:h-[450px]"
            />
            <h3 className="text-xl font-bold py-2 text-center">
              {categories.artificial}
            </h3>
            <div className="flex flex-col gap-2 items-center justify-center my-2">
              <p className="text-gray-600 text-center">
                {categories.description}
              </p>
              <Link
                href={ROUTES.CATEGORIES}
                className="py-3 px-8 bg-green-800 hover:bg-green-900 hover:rounded-md text-white flex items-center gap-2 transition-all duration-150"
              >
                {categories.explore} <ArrowRight />
              </Link>
            </div>
          </div>

          <div className=" w-full lg:absolute lg:right-0 lg:top-[-30px] lg:w-[350px] lg:h-[500px] ">
            <Image
              src={ImageCat2}
              alt=""
              width={350}
              height={500}
              className="w-full h-[300px] lg:h-[500px]"
            />
            <h3 className="text-xl font-bold py-5 text-center">
              {categories.natural}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCategories;
