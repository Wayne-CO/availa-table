import Button from "@mui/material/Button";
// import { Prisma } from "@prisma/client";
import { prisma } from "lib/prisma";

// Todo: use in restaurant card prop type
// type restaurantCard = Prisma.PromiseReturnType<typeof fetchRestaurants>

const fetchRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      mainImage: true,
      cuisine: true,
      location: true,
      price: true,
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
