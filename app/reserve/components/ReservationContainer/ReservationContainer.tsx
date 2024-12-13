"use client";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { format } from "date-fns";
import { Controller, useForm } from "react-hook-form";
import ReservationStepper from "@/app/components/ReservationStepper";
import RestaurantCard from "@/app/components/RestaurantCard";
import TitleSection from "@/app/components/TitleSection";
import { steps } from "@/app/data";
import { RestaurantCardData } from "@/app/page";
import { convertToDisplayTime, Time } from "@/app/utils/convertToDisplayTime";
import BookingSelection from "../BookingSelection";

export default function ReservationContainer({
  restaurant,
  date,
  partySize,
}: {
  restaurant: RestaurantCardData;
  date: string;
  partySize: string;
}) {
  const theme = useTheme();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      bookerFirstName: "",
      bookerLastName: "",
      bookerPhone: "",
      bookerEmail: "",
      bookerOccasion: "",
      bookerRequest: "",
    },
  });
  const [day, time] = date.split("T");

  return (
    <Paper>
      <Grid container spacing={2} mt={8}>
        <Grid size={12}>
          <Typography
            variant="h2"
            fontSize={theme.typography.pxToRem(24)}
            fontWeight="700"
            textAlign="center"
            padding="46px 30px"
          >
            Make a Reservation
          </Typography>
          <Box width={theme.typography.pxToRem(800)} m="0 auto">
            <ReservationStepper activeStep={2} steps={steps} />
          </Box>
        </Grid>
      </Grid>
      <TitleSection title="Booking Information" />
      <Grid container px="64px" pb="47px" columnSpacing="30px">
        <Grid size={6}>
          <RestaurantCard
            restaurant={restaurant}
            sxCard={{ width: "100%" }}
            sxCardMedia={{ height: "127px" }}
            sxCardContent={{
              minHeight: "130px",
              pb: "16px",
              "&:last-child": {
                pb: "16px",
              },
            }}
          />
        </Grid>

        <Grid size={6}>
          <Grid container rowSpacing="30px" columnSpacing="30px">
            <Grid size={12}>
              <BookingSelection
                label="DATE SELECTED"
                value={format(new Date(date), "EEEE, MMMM d, yyy")}
              />
            </Grid>
            <Grid size={6}>
              <BookingSelection
                label="TIME SELECTED"
                value={convertToDisplayTime(time as Time)}
              />
            </Grid>
            <Grid size={6}>
              <BookingSelection
                label="GUEST COUNT"
                value={`${partySize} ${
                  parseInt(partySize) === 1 ? "Guest" : "Guests"
                }`}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <TitleSection title="Confirmation Details" />
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
            provided First Name and Last Name will serve as the reservation name
            for your guests to check-in. <br />
            By clicking “Confirm Reservation” you agree to AvailaTable’s Terms
            of Use and Privacy Policy. You may opt out of receiving text
            messages and emails at any time. Standard text message rates may
            apply.
          </Typography>
        </Grid>
        <Grid size={12} textAlign="center">
          <Button variant="contained">CONFIRM RESERVATION</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
