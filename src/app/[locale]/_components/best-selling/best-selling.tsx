import TitleBestSelling from "./title-best-selling";
import PlantList from "../plants/plants-list";
import { bestPlantsQuery } from "@/server/queries/best-plants";

const BestSelling = async () => {
  const BestSellingPlants = await bestPlantsQuery({ limit: 6 });

  return (
    <div className="my-10 container">
      <TitleBestSelling />
      <PlantList plants={BestSellingPlants} />
    </div>
  );
};

export default BestSelling;
