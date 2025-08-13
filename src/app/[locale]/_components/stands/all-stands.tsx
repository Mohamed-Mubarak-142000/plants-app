import React from "react";
import StandList from "./stand-list";
import TitleSection from "../title-section/title-section";
import { getCurrentLang } from "@/lib/get-current-lang";
import getTrans from "@/lib/translation";
import { Image1, Image2, Image3 } from "../../../../../public/images";

async function AllStands() {
  const locale = await getCurrentLang();
  const { home } = await getTrans(locale);

  const allStand = [
    {
      id: 1,
      image: Image1,
    },
    {
      id: 2,
      image: Image2,
    },
    {
      id: 3,
      image: Image3,
    },
  ];
  return (
    <>
      <TitleSection
        title={home.popular_stands_title}
        subtitle={home.popular_stands_subtitle}
      />

      <div className="w-full bg-green-200 my-20 min-h-screen-75">
        <StandList allStand={allStand} />
      </div>
    </>
  );
}

export default AllStands;
