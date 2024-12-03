import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TitleSection from "@/app/components/TitleSection";
import { RestaurantDetails } from "../../page";
import Description from "../Description";
import PhotoList from "../PhotoList";
import Reviews from "../Reviews";

type Props = {
  restaurant: RestaurantDetails;
};

export default function Details({ restaurant }: Props) {
  return (
    <>
      <Box>
        <TitleSection title="restaurant details" />
      </Box>
      <Grid container pb="30px">
        <Grid size={12}>
          <Description
            description={restaurant.description}
            reviews={restaurant.reviews}
          />
        </Grid>
      </Grid>

      <TitleSection title="photos" />
      <Grid container sx={{ px: 8, pb: "62px" }}>
        <Grid size={12} py="16px">
          <PhotoList
            photos={restaurant.images}
            photoWidth={226}
            photoHeight={175}
            imageListProps={{
              cols: 3,
              gap: 5,
              sx: {
                margin: 0,
              },
            }}
          />
        </Grid>
      </Grid>

      <Reviews reviews={restaurant.reviews} />
    </>
  );
}
