import Button from "@mui/material/Button";
import { prisma } from "lib/prisma";

const fetchRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany();

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
