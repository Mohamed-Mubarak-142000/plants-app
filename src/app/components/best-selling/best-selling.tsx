"use client";
import React, { useEffect, useState } from "react";
import TitleBestSelling from "./title-best-selling";
import PlantList from "../plants/plants-list";

const BestSelling = () => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch("/plants.json");
        const data = await response.json();
        setPlants(data);
      } catch (error) {
        console.error("Error fetching plants data:", error);
      }
    };

    fetchPlants();
  }, []);
  return (
    <div className="my-10">
      <TitleBestSelling />
      <PlantList plants={plants.slice(0, 6)} />
    </div>
  );
};

export default BestSelling;
