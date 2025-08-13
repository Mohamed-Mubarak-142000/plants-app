import { ROUTES } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LogoImage } from "../../../../../public/images";

const Logo = () => {
  return (
    <Link
      href={`${ROUTES.HOME}`}
      className="w-36 h-24 flex items-center justify-center"
    >
      <Image src={LogoImage} alt="logo" width={100} height={100} />
    </Link>
  );
};

export default Logo;
