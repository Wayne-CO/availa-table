import { Box } from "@mui/material";
import { PRICE } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import Header from "./components/Header";
import SearchSideBar from "./SearchSideBar";

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

      <Box component="main" width="1272px" margin="auto" px="20px" pt="270px">
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        {restaurants.length ? (
          JSON.stringify({ restaurants })
        ) : (
          <p>Sorry there are no restaurants in this area.</p>
        )}
      </Box>
    </>
  );
}
