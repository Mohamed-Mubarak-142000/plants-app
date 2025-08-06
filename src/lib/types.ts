import { Prisma } from "@prisma/client";

export enum Environment {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
  TEST = "test",
}

export type PlantType = Prisma.ProductGetPayload<{
  include: { orderQuantity: true; category: true; stands: true; _count: true };
}>;

export enum Languages {
  ARABIC = "ar",
  ENGLISH = "en",
}
export enum Directions {
  RTL = "rtl",
  LTR = "ltr",
}
