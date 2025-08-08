import React from "react";
import StandItem from "./stand-item";
import Link from "../link";
import { ArrowRight } from "lucide-react";
import { getCurrentLang } from "@/lib/get-current-lang";
import getTrans from "@/lib/translation";
import { ROUTES } from "@/lib/types";

interface StandListProps {
  image: string;
  id: number;
}
async function StandList({ allStand }: { allStand: StandListProps[] }) {
  const locale = await getCurrentLang();
  const { best_selling } = await getTrans(locale);
  return (
    <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-16">
      {allStand.map((stand) => (
        <StandItem key={stand.id} image={stand.image} />
      ))}
      <div className=" flex items-center justify-start">
        <Link
          href={ROUTES.STANDS}
          className="w-full flex items-center justify-start gap-2  py-3 px-6 transition-all duration-150"
        >
          {best_selling.see_more} <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default StandList;
