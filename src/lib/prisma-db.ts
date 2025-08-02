import { Environment } from "./types";
import { PrismaClient } from "@prisma/client";
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};
export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === Environment.DEVELOPMENT
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== Environment.PRODUCTION) {
  globalForPrisma.prisma = db;
}
