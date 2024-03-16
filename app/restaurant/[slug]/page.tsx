import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TitleSection from "@/app/components/TitleSection";
import { prisma } from "@/lib/prisma";
import Description from "./components/Description";
// import PhotoList from "./components/PhotoList";
// import RestaurantNavBar from "./components/RestaurantNavBar";

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

  return (
    <Box>
      <Box pb={2}>
        <TitleSection title="restaurant details" />
      </Box>
      <Grid container pb="62px">
        <Grid xs={12}>
          <Description description={restaurant.description} />
        </Grid>
      </Grid>

      {/* <Box pb={4}>
        <TitleSection title="photos" />
      </Box>
      <Grid container>
        <Grid xs={12}>
          <PhotoList
            photos={restaurant.images}
            photoWidth={226}
            photoHeight={175}
          />
        </Grid>
      </Grid> */}
    </Box>
  );
}
