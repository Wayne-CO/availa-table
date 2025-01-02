import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  Button,
  Grid2 as Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import { FormEvent } from "react";
import { Control, Controller } from "react-hook-form";
import TitleSection from "@/app/components/TitleSection";
import { ReservationRequest } from "@/lib/reservation";

type Props = {
  onSubmit: (data: FormEvent<HTMLFormElement>) => Promise<void>;
  control: Control<ReservationRequest>;
  pending: boolean;
};

export default function BookingForm({ onSubmit, control, pending }: Props) {
  const params = useParams<{ slug: string }>();
  const handleFormSubmit = async (data: FormEvent<HTMLFormElement>) => {
    await onSubmit(data);
  };

  return (
    <>
      <TitleSection title="Confirmation Details" />
      <Box component="form" onSubmit={handleFormSubmit}>
        <Grid container columnSpacing="16px" rowSpacing="24px" p="30px 64px">
          <Grid size={6}>
            <Controller
              name="bookerFirstName"
              control={control}
              render={({ field }) => (
                <TextField required label="First Name" {...field} fullWidth />
              )}
            />
          </Grid>
          <Grid size={6}>
            <Controller
              name="bookerLastName"
              control={control}
              render={({ field }) => (
                <TextField required label="Last Name" {...field} fullWidth />
              )}
            />
          </Grid>
          <Grid size={6}>
            <Controller
              name="bookerPhone"
              control={control}
              render={({ field }) => (
                <TextField required label="Phone Number" {...field} fullWidth />
              )}
            />
          </Grid>
          <Grid size={6}>
            <Controller
              name="bookerEmail"
              control={control}
              render={({ field }) => (
                <TextField required label="Email" {...field} fullWidth />
              )}
            />
          </Grid>
          <Grid size={12}>
            <Controller
              name="bookerOccasion"
              control={control}
              render={({ field }) => (
                <TextField
                  required
                  label="Occasion"
                  {...field}
                  helperText="Birthday, Anniversary, Proposal, Date Night, Business Meal, Celebration..."
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid size={12}>
            <Controller
              name="bookerRequest"
              control={control}
              render={({ field }) => (
                <TextField
                  required
                  label="Special Requests"
                  {...field}
                  helperText="Allergies, Accessibility, High Chair, Dietary Restrictions, Pets, Seating Area..."
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>

        <Grid container rowSpacing="30px" pb="50px">
          <Grid size={12}>
            <Typography
              color="text.secondary"
              fontSize="12px"
              lineHeight="12px"
              letterSpacing="0.15px"
              textAlign="center"
            >
              Please verify that all information is accurate before booking. The
              provided First Name and Last Name will serve as the reservation
              name for your guests to check-in. <br />
              By clicking “Confirm Reservation” you agree to AvailaTable’s Terms
              of Use and Privacy Policy. You may opt out of receiving text
              messages and emails at any time. Standard text message rates may
              apply.
            </Typography>
          </Grid>
          <Grid size={12} textAlign="center">
            <Button href={`/restaurant/${params.slug}`} sx={{ mr: "77px" }}>
              BACK TO BOOKING
            </Button>
            <LoadingButton type="submit" variant="contained" loading={pending}>
              CONFIRM RESERVATION
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
