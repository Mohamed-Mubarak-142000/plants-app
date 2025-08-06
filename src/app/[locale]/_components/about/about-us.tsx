import { Box, Flower2, PhoneCall } from "lucide-react";
import React from "react";
import CardAbout from "./card-about-us";
import TitleSection from "../title-section/title-section";
import { getCurrentLang } from "@/lib/get-current-lang";
import getTrans from "@/lib/translation";

async function AboutUs() {
  const locale = await getCurrentLang();
  const { about } = await getTrans(locale);
  const dataAboutUs = [
    {
      id: 1,
      icon: <Flower2 width={30} height={30} />,
      title: about.items.assortment.title,
      content: about.items.assortment.content,
    },
    {
      id: 2,
      icon: <Box width={30} height={30} />,
      title: about.items.shipping.title,
      content: about.items.shipping.content,
    },
    {
      id: 3,
      icon: <PhoneCall width={30} height={30} />,
      title: about.items.support.title,
      content: about.items.support.content,
    },
  ];
  return (
    <>
      <TitleSection title={about.title} subtitle={about.subtitle} />

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {dataAboutUs.map((item) => (
          <CardAbout key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default AboutUs;
