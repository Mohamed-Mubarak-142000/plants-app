import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const StandItem = ({ image }: { image: string | StaticImport }) => {
  return (
    <div className="w-full h-[400px]">
      <Image
        src={image}
        alt={"image"}
        width={300}
        height={500}
        className="w-full h-full"
      />
    </div>
  );
};

export default StandItem;
