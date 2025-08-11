import { ROUTES } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={`${ROUTES.HOME}`} className="w-[90px] h-[90px]">
      <Image src="/images/logo.png" alt="logo" width={100} height={100} />;
    </Link>
  );
};

export default Logo;
