import { Prisma } from "@prisma/client";

export enum Environment {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
  TEST = "test",
}

export type PlantType = Prisma.ProductGetPayload<{
  include: { orderQuantity: true; category: true; stands: true; _count: true };
}>;

// type user from prisma
export type UserType = Prisma.UserGetPayload<{
  include: {
    Account: true;
    Session: true;
    _count: true;
    orderQuantity: true;
    orders: true;
  };
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
  HOME: "/customer",
  PLANTS: "/plants",
  STANDS: "/stands",
  CATEGORIES: "/categories",
  CONTACT: "/contact",
  AUTH: "/auth",

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
export enum ROUTES_AUTH {
  LOGIN = "/login",
  REGISTER = "/register",
  PROFILE = "/profile",
}

export type SidebarLink = {
  title: string;
  href: string;
  icon: () => React.ReactNode;
  children?: {
    title: string;
    href: string;
    icon: () => React.ReactNode;
  }[];
};

export type LoginFormTranslationsProps = {
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  forgetPasswordText: string;
  loginButton: string;
  noAccountText: string;
  signUpText: string;
  loginSuccess: string;
  loginError: string;
};

export type ValidationMessages = {
  emailInvalid: string;
  passwordInvalid: string;
  emailRequired: string;
  passwordRequired: string;
  passwordMin: string;
};
