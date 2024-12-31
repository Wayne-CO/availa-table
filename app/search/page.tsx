import { Box, Typography } from "@mui/material";
import { PRICE } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";
import SearchSideBar from "./SearchSideBar";
import Footer from "../components/Footer";

type SearchParams = {
  city?: string;
  cuisine?: string;
  price?: PRICE;
};

const fetchRestaurantsByParams = (searchParams: SearchParams) => {
  const select = {
    id: true,
    name: true,
    mainImage: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    reviews: true,
  };

  return prisma.restaurant.findMany({
    where: {
      location: { name: { equals: searchParams.city?.toLocaleLowerCase() } },
      cuisine: { name: { equals: searchParams.cuisine?.toLocaleLowerCase() } },
      price: { equals: searchParams.price },
    },
    select,
  });
};

const fetchLocations = () => {
  return prisma.location.findMany();
};

const fetchCuisines = () => {
  return prisma.cuisine.findMany();
};

type Props = {
  searchParams: SearchParams;
};

export default async function Search({ searchParams }: Props) {
  const restaurants = await fetchRestaurantsByParams(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />

      <Box
        component="main"
        width="1272px"
        margin="0 auto -50px"
        px="20px"
        pt="44px"
      >
        <Box display="flex">
          <Box pr={2}>
            <SearchSideBar
              locations={locations}
              cuisines={cuisines}
              searchParams={searchParams}
            />
          </Box>
          {restaurants.length ? (
            <Box width="100%">
              {restaurants.map((restaurant) => (
                <Box pb={2} key={restaurant.id}>
                  <RestaurantCard restaurant={restaurant} />
                </Box>
              ))}
            </Box>
          ) : (
            <Typography pt={6}>
              Sorry there are no restaurants in this area.
            </Typography>
          )}
        </Box>
      </Box>

      <Footer />
    </>
  );
}
