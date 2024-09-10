import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Prisma } from "@prisma/client";
import { prisma } from "lib/prisma";
import RestaurantCard from "./components/RestaurantCard";

type RestaurantsCardData = Prisma.PromiseReturnType<typeof fetchRestaurants>;

export type RestaurantCardData = RestaurantsCardData[0];

const fetchRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      mainImage: true,
      price: true,
      slug: true,
      reviews: true,
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

  return (
    <Box component="main" width="1272px" margin="auto" px="20px">
      <Typography variant="h4" mb="54px">
        EXPLORE YOUR OPTIONS
      </Typography>

      <Grid container spacing={2}>
        {restaurants.map((restaurant) => (
          <Grid key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
