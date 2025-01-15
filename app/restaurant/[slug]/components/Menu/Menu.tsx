import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TitleSection from "@/app/components/TitleSection";
import { RestaurantDetails } from "../../page";
import MenuCard from "../MenuCard";

type Props = {
  restaurant: RestaurantDetails;
};

export default function Menu({ restaurant }: Props) {
  return (
    <Box>
      <TitleSection title="Selections" />
      <Grid container spacing={2} pt="16px" px="64px">
        {restaurant.items.map(({ id, name, description, price }) => {
          return (
            <Grid size={6} key={id}>
              <MenuCard name={name} price={price} description={description} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
