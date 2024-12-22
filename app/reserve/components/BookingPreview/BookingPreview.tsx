import { Grid2 as Grid } from "@mui/material";
import { UseFormWatch } from "react-hook-form";
import { ReservationRequest } from "@/lib/reservation";
import BookingSelection from "../BookingSelection";

type Props = {
  watch: UseFormWatch<ReservationRequest>;
};

export default function BookingPreview({ watch }: Props) {
  const {
    bookerFirstName,
    bookerLastName,
    bookerEmail,
    bookerPhone,
    bookerOccasion,
    bookerRequest,
  } = watch();

  return (
    <Grid container rowSpacing="30px" columnSpacing="30px">
      <Grid size={5}>
        <BookingSelection
          label="NAME"
          value={`${bookerFirstName} ${bookerLastName}`}
        />
      </Grid>
      <Grid size={2}>
        <BookingSelection label="PHONE NUMBER" value={bookerPhone} />
      </Grid>
      <Grid size={5}>
        <BookingSelection label="EMAIL" value={bookerEmail} />
      </Grid>

      <Grid size={12}>
        <BookingSelection label="OCCASION" value={bookerOccasion ?? ""} />
      </Grid>

      <Grid size={12}>
        <BookingSelection
          label="SPECIAL REQUESts"
          value={bookerRequest ?? ""}
        />
      </Grid>
    </Grid>
  );
}
