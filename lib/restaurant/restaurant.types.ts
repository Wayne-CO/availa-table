import { Prisma } from "@prisma/client";

const restaurantTablesWithHours =
  Prisma.validator<Prisma.RestaurantDefaultArgs>()({
    select: { Table: true, openTime: true, closeTime: true },
  });

export type RestaurantTablesWithHours = Prisma.RestaurantGetPayload<
  typeof restaurantTablesWithHours
>;
