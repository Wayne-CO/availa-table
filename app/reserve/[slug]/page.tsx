import { Box } from "@mui/material";
import { prisma } from "@/lib/prisma";
import ReservationContainer from "../components/ReservationContainer";

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUniqueOrThrow({
    where: {
      slug,
    },
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

  return restaurant;
};
export default async function Reserve({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { date: string; partySize: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  const { date, partySize } = searchParams;

  return (
    <Box component="main" sx={{ width: "1272px", margin: "auto", px: "20px" }}>
      <ReservationContainer
        slug={params.slug}
        restaurant={restaurant}
        date={date}
        partySize={partySize}
      />
    </Box>
  );
}
