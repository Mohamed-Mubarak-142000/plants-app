import React from "react";
import StandList from "./stand-list";
import TitleSection from "../title-section/title-section";
import { getCurrentLang } from "@/lib/get-current-lang";
import getTrans from "@/lib/translation";

async function AllStands() {
  const locale = await getCurrentLang();
  const { home } = await getTrans(locale);

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
