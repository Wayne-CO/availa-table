import { Grid2 as Grid } from "@mui/material";
import BookingSelection from "../BookingSelection";

type Props = {
  name: string;
};

export default function BookingPreview({ name }: Props) {
  return (
    <Grid container rowSpacing="30px" columnSpacing="30px">
      <Grid size={5}>
        <BookingSelection label="Name" value={name} />
      </Grid>
      <Grid size={2}>
        <BookingSelection label="Name" value={name} />
      </Grid>
      <Grid size={5}>
        <BookingSelection label="Name" value={name} />
      </Grid>

      <Grid size={12}>
        <BookingSelection label="Occasion" value={name} />
      </Grid>

      <Grid size={12}>
        <BookingSelection label="Special Requests" value={name} />
      </Grid>
    </Grid>
  );
}
