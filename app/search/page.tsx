import { prisma } from "@/lib/prisma";

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

type Props = {
  searchParams: {
    city: string;
  };
};

export default async function Search({ searchParams }: Props) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);
  console.log(restaurants);

  return (
    <>
      {restaurants.length ? (
        JSON.stringify({ restaurants })
      ) : (
        <p>Sorry there are no restaurants in this area.</p>
      )}
    </>
  );
}
