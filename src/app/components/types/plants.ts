export interface Plant {
  id: number;
  name: string;
  type: string;
  description: string;
  watering: string;
  sunlight: string;
  temperature: string;
  price: number;
  stock: number;
  image: string;
}

export type PlantListType = Plant[];
