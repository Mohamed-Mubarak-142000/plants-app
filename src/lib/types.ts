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

export enum USER_ROLE {
  ADMIN = "ADMIN",
  USER = "USER",
}

// ROUTES.ts
export const ROUTES = {
  HOME: "/",
  PLANTS: "/plants",
  STANDS: "/stands",
  CATEGORIES: "/categories",
  CONTACT: "/contact",

  ADMIN: "/admin",
  DASHBOARD: "dashboard",
  CATEGORY_LIST: "categories-list",
  USERS: "users",
  ORDERS: "orders",
  INBOX: "inbox",
};

export const ROUTES_PLANTS = {
  PLANTS: "plants",
  PLANT: "plant:id",
  PLANTS_LIST: "plants-list",
  PLANTS_TRANSACTIONS: "plants-transactions",
  PLANTS_ADD: "add-plant",
  PLANTS_EDIT: "plants-edit",
  PLANTS_DETAILS: "plants-details",
};

export const ROUTES_CATEGORIES = {
  CATEGORIES_ADD: "add-category",
  CATEGORIES_EDIT: "categories-edit",
  CATEGORIES_DELETE: "categories-delete",
  CATEGORIES_DETAILS: "categories-details",
};
export enum AUTH {
  LOGIN = "/login",
  REGISTER = "/register",
}

export type SidebarLink = {
  title: string;
  href: string;
  icon: () => React.ReactNode;
  children?: SidebarLink[];
};
