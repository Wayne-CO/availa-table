import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Restaurant } from "@prisma/client";
import TitleSection from "@/app/components/TitleSection";
import Description from "../Description";
import PhotoList from "../PhotoList";

type Props = {
  restaurant: Restaurant;
};

export default function Details({ restaurant }: Props) {
  return (
    <>
      <Box pb={4}>
        <TitleSection title="restaurant details" />
      </Box>
      <Grid container pb="62px">
        <Grid xs={12}>
          <Description description={restaurant.description} />
        </Grid>
      </Grid>

      <TitleSection title="photos" />
      <Grid container sx={{ px: 8 }}>
        <Grid xs={12}>
          <PhotoList
            photos={restaurant.images}
            photoWidth={226}
            photoHeight={175}
            imageListProps={{
              cols: 3,
              gap: 5,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
