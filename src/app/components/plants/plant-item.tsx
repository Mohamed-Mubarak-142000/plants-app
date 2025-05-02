import React from "react";
import { Plant } from "../types/plants";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "../link";
import { formatCurrency } from "@/lib/formatter";

const PlantItem = ({ plant }: { plant: Plant }) => {
  return (
    <Card className="border-none rounded-none shadow-none ">
      <CardContent className="flex  items-center justify-center flex-col h-[300px] my-2">
        <Image
          src={plant.image}
          alt={plant.name}
          width={200}
          height={200}
          loading="lazy"
          className="rounded-none object-contain h-full"
        />
      </CardContent>

      <CardFooter className="flex flex-col gap-5 m-0 p-3">
        <div className="flex justify-between items-center w-full">
          <span className="text-center">
            {" "}
            <Link href={`/plants/${plant.id}`}>{plant.name}</Link>{" "}
          </span>
          <span className="text-center font-bold">
            {formatCurrency(plant.price)}
          </span>
        </div>

        <div className="flex justify-between items-center w-full">
          <span className="text-red-500 font-semibold">
            {plant.stock} in Stock
          </span>

          <button className="text-white bg-green-800 py-2 px-4 hover:bg-green-900 transition-all duration-150 flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Buy Now
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PlantItem;
