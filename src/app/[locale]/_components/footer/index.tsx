import React from "react";
import Logo from "../logo";
import { InstagramIcon, LucideFacebook, TwitterIcon } from "lucide-react";
import { getCurrentLang } from "@/lib/get-current-lang";
import getTrans from "@/lib/translation";

async function Footer() {
  const locale = await getCurrentLang();
  const { footer } = await getTrans(locale);
  return (
    <div className="bg-green-800 min-h-[250px] pt-2 mb-0 ">
      <div className="container flex flex-col-reverse md:flex-row items-start justify-between lg:items-center lg:justify-between">
        <div className=" flex flex-col items-start gap-4">
          <Logo />
          <p className="text-white">{footer.title}</p>
          <p className="text-white">{footer.description}</p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center border border-gray-300">
              <LucideFacebook size={28} color="white" />
            </div>
            <div className="w-16 h-16 rounded-full flex items-center justify-center border border-gray-300">
              <InstagramIcon size={28} color="white" />
            </div>

            <div className="w-16 h-16 rounded-full flex items-center justify-center border border-gray-300">
              <TwitterIcon size={28} color="white" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col gap-4">
            <p className="text-white hover:text-green-500 transition-all duration-150">
              {footer.links.home}
            </p>
            <p className="text-white hover:text-green-500 transition-all duration-150">
              {footer.links.plants}
            </p>
            <p className="text-white hover:text-green-500 transition-all duration-150">
              {footer.links.categories}
            </p>
            <p className="text-white hover:text-green-500 transition-all duration-150">
              {footer.links.contact}
            </p>
            <p className="text-white hover:text-green-500 transition-all duration-150">
              {footer.links.stands}
            </p>
          </div>
        </div>
      </div>
      <div className="text-white my-0 text-center mt-4">
        2023 {footer.all_reverse}
        <span className="font-bold mx-1">{footer.plantify}</span>
      </div>
    </div>
  );
}

export default Footer;
