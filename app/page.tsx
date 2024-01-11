import Button from "@mui/material/Button";
import { Prisma } from "@prisma/client";
import { prisma } from "lib/prisma";

type RestaurantsCardData = Prisma.PromiseReturnType<typeof fetchRestaurants>;

export type RestaurantCardData = RestaurantsCardData[0];

const fetchRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      mainImage: true,
      price: true,
      cuisine: {
        select: {
          name: true,
        },
      },
      location: {
        select: {
          name: true,
        },
      },
    },
  });

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  console.log("restaurants :>> ", restaurants);
  return (
    <div>
      <Button variant="contained">Hello</Button>
    </div>
  );
}
