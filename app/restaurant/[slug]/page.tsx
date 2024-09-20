import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import RestaurantContainer from "./components/RestaurantContainer";

export type RestaurantDetails = Prisma.PromiseReturnType<
  typeof fetchRestaurantBySlug
>;

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUniqueOrThrow({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      items: true,
      reviews: true,
    },
  });

  return restaurant;
};

type Props = {
  params: {
    slug: string;
  };
};

export default async function RestaurantDetails({ params }: Props) {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return <RestaurantContainer restaurant={restaurant} />;
}
