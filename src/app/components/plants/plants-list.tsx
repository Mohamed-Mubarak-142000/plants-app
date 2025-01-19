import React from "react";
import { PlantListType } from "../types/plants";
import PlantItem from "./plant-item";

interface PlantListProps {
  plants: PlantListType;
}
const PlantList = ({ plants }: PlantListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {plants.map((plant) => (
        <PlantItem key={plant.id} plant={plant} />
      ))}
    </div>
  );
};

export default PlantList;
