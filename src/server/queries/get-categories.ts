import { db } from "@/lib/prisma-db";
import { cacheQuery } from "../utils/cache";
import { QueryKeys } from "../utils/queries-types";

export const getCategories = cacheQuery(
  () => {
    const categories = db.category.findMany({
      orderBy: {
        order: "asc",
      },
    });

    return categories;
  },
  [QueryKeys.GET_CATEGORIES],
  { revalidate: 3600 }
);
