import { PRICE } from "@prisma/client";
import { prisma } from "@/lib/prisma";
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
    </>
  );
}
