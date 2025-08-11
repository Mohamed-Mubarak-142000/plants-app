import React from "react";

import PlantItem from "./plant-item";
import { PlantType } from "@/lib/types";

const PlantList = ({ plants }: { plants: PlantType[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {plants?.map((plant) => (
        <PlantItem key={plant.id} plant={plant} />
      ))}
    </div>
  );
};

export default PlantList;
