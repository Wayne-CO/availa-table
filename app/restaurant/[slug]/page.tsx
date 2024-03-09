import { Box } from "@mui/material";
import { prisma } from "@/lib/prisma";

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

  console.log("restaurant", restaurant);
  return <Box></Box>;
}
