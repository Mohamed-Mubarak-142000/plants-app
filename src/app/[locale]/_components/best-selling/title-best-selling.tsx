import React from "react";
import Link from "../link";
import { getCurrentLang } from "@/lib/get-current-lang";
import getTrans from "@/lib/translation";
import { ROUTES } from "@/lib/types";

async function TitleBestSelling() {
  const locale = await getCurrentLang();
  const { best_selling } = await getTrans(locale);
  return (
    <div className="flex items-center justify-between my-10">
      <div className="flex flex-row justify-between lg:flex-col items-center lg:items-start">
        <h2 className="text-3xl font-bold">{best_selling.title}</h2>
        <p className="text-gray-600 hidden lg:block">
          {best_selling.subtitle}{" "}
        </p>
      </div>

      <Link
        href={ROUTES.PLANTS}
        className="text-white bg-green-800 py-3 px-6 hover:bg-green-900 transition-all duration-150"
      >
        {best_selling.see_more}
      </Link>
    </div>
  );
}

export default TitleBestSelling;
