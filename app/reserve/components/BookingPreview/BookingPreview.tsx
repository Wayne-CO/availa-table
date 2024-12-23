import { Grid2 as Grid, Typography } from "@mui/material";
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
    <>
      <Grid container rowSpacing="30px" columnSpacing="30px" pb="46px">
        <Grid size={4.6}>
          <BookingSelection
            label="NAME"
            value={`${bookerFirstName} ${bookerLastName}`}
          />
        </Grid>
        <Grid size={2.8}>
          <BookingSelection label="PHONE NUMBER" value={bookerPhone} />
        </Grid>
        <Grid size={4.6}>
          <BookingSelection label="EMAIL" value={bookerEmail} />
        </Grid>

        <Grid size={12}>
          <BookingSelection label="OCCASION" value={bookerOccasion ?? ""} />
        </Grid>

        <Grid size={12}>
          <BookingSelection
            label="SPECIAL REQUESTS"
            value={bookerRequest ?? ""}
          />
        </Grid>
      </Grid>

      <Typography
        textAlign="center"
        color="text.secondary"
        lineHeight="12px"
        fontSize="12px"
        letterSpacing="0.15px"
        pb="50px"
      >
        You have agreed to AvailaTable’s Terms of Use and Privacy Policy by
        clicking “Confirm Reservation”. <br /> You may opt out of receiving text
        messages and emails at any time. Standard text message rates may apply.
      </Typography>
    </>
  );
}
