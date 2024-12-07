import { prisma } from "@/lib/prisma";

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUniqueOrThrow({
    where: {
      slug,
    },
  });

  return restaurant;
};
export default async function Reserve({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  return <div>{JSON.stringify(restaurant)}</div>;
}
