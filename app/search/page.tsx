import { prisma } from "@/lib/prisma";
import SearchSideBar from "./SearchSideBar";

const fetchRestaurantsByCity = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    mainImage: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  // !Return all restaurants if no city is provided
  if (!city) return prisma.restaurant.findMany({ select });

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLocaleLowerCase(),
        },
      },
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
  searchParams: {
    city?: string;
    cuisine?: string;
    price?: string;
  };
};

export default async function Search({ searchParams }: Props) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <SearchSideBar locations={locations} cuisines={cuisines} />
      {restaurants.length ? (
        JSON.stringify({ restaurants })
      ) : (
        <p>Sorry there are no restaurants in this area.</p>
      )}
    </>
  );
}
