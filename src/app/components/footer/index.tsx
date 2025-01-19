import React from "react";
import Logo from "../logo";
import { InstagramIcon, LucideFacebook, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-green-800 min-h-[250px] pt-2 mb-0 ">
      <div className="container flex flex-col-reverse md:flex-row items-start justify-between lg:items-center lg:justify-between">
        <div className=" flex flex-col items-start gap-4">
          <Logo />
          <p className="text-white">We help you find your dream plant</p>
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
            <h3 className="text-white font-bold text-lg">About</h3>
            <p className="text-white hover:text-green-500 transition-all duration-150">
              About Us
            </p>
            <p className="text-white hover:text-green-500 transition-all duration-150">
              Contact Us
            </p>
            <p className="text-white hover:text-green-500 transition-all duration-150">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      <div className="text-white my-0 text-center mt-4">
        2023 all Right Reserved Term of use
        <span className="font-bold ml-1">Plantify</span>
      </div>
    </div>
  );
};

export default Footer;
