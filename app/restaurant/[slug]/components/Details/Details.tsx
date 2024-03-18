import { Box, Paper } from "@mui/material";
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
    <Paper sx={{ width: 816 }}>
      <Box pb={2}>
        <TitleSection title="restaurant details" />
      </Box>
      <Grid container pb="62px">
        <Grid xs={12}>
          <Description description={restaurant.description} />
        </Grid>
      </Grid>

      <Box pb={4}>
        <TitleSection title="photos" />
      </Box>
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
    </Paper>
  );
}
