import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import { prisma } from "lib/prisma";
import RestaurantCard from "./components/RestaurantCard";

import bannerMain from "../public/banner-main.svg";

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
    <Box>
      <Box
        position="absolute"
        height="696px"
        width="100%"
        overflow="hidden"
        zIndex="-1"
      >
        <Image
          alt="Table and Chairs"
          src={bannerMain}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </Box>

      <Box component="main" width="1272px" margin="auto" px="20px" pt="646px">
        <Grid container spacing={2}>
          {restaurants.map((restaurant) => (
            <Grid key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
