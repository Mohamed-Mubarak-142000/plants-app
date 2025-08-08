import { db } from "@/lib/prisma-db";
import { cacheQuery } from "../utils/cache";
import { QueryKeys } from "../utils/queries-types";

export const bestPlantsQuery = cacheQuery(
  ({ limit }: { limit?: number | undefined }) => {
    const plants = db.product.findMany({
      where: {
        orderQuantity: {
          some: {
            quantity: {
              gt: 0,
            },
          },
        },
      },
      orderBy: {
        orderQuantity: {
          _count: "desc",
        },
      },
      include: {
        orderQuantity: true,
        category: true,
        stands: true,
        _count: true,
      },
      take: limit || 10,
    });

    return plants;
  },
  [QueryKeys.BEST_PLANTS],
  { revalidate: 60 }
);
