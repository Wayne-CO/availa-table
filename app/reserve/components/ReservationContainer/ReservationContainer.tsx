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
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ReservationStepper from "@/app/components/ReservationStepper";
import RestaurantCard from "@/app/components/RestaurantCard";
import TitleSection from "@/app/components/TitleSection";
import { steps } from "@/app/data";
import { RestaurantCardData } from "@/app/page";
import { convertToDisplayTime, Time } from "@/app/utils/convertToDisplayTime";
import { ReservationRequest } from "@/lib/reservation";
import { useReservation } from "@/lib/reservation/hooks/useReservation";
import BookingSelection from "../BookingSelection";

export default function ReservationContainer({
  slug,
  restaurant,
  date,
  partySize,
}: {
  slug: string;
  restaurant: RestaurantCardData;
  date: string;
  partySize: string;
}) {
  const theme = useTheme();
  const reservation = useReservation();
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
  const [didBook, setDidBook] = useState(false);
  const [day, time] = date.split("T");

  const onSubmit = async (data: ReservationRequest) => {
    const {
      bookerEmail,
      bookerFirstName,
      bookerLastName,
      bookerPhone,
      bookerOccasion,
      bookerRequest,
    } = data;

    reservation.mutate(
      {
        slug,
        partySize,
        time,
        day,
        bookerFirstName,
        bookerLastName,
        bookerEmail,
        bookerPhone,
        bookerOccasion,
        bookerRequest,
      },
      {
        onSuccess: () => {
          setDidBook(true);
        },
      },
    );
  };

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

        {didBook && (
          <Grid size={12} mx="64px">
            <Box
              sx={{
                backgroundColor: "#434343",
                textAlign: "center",
                boxShadow: "0px 0px 20px 0px #000000 inset",
                borderRadius: "4px",
                padding: "14px",
              }}
            >
              <Box sx={{ border: "0.5px solid #34C759" }}>
                <Typography
                  color="white"
                  fontSize="24px"
                  lineHeight="32.02px"
                  p="16px 0 2px"
                >
                  CONGRATULATIONS ON SUCCESSFULLY BOOKING A RESERVATION!
                </Typography>
                <Typography
                  color="white"
                  fontSize="14px"
                  lineHeight="20px"
                  pb="2px"
                >
                  • The provided First Name and Last Name will serve as the
                  reservation name for your guests to check-in.
                </Typography>
                <Typography
                  color="white"
                  fontSize="14px"
                  lineHeight="20px"
                  pb="2px"
                >
                  • If you have any other questions or specific requests that
                  you forgot to list down, please reach out to the restaurant to
                  make preparations.
                </Typography>
                <Typography
                  color="white"
                  fontSize="14px"
                  lineHeight="20px"
                  pb="26px"
                >
                  • Enjoy your meal!
                </Typography>
              </Box>
            </Box>
          </Grid>
        )}
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
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
            <Button variant="contained" type="submit">
              CONFIRM RESERVATION
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
