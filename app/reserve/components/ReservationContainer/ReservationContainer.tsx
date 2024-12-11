"use client";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ReservationStepper from "@/app/components/ReservationStepper";
import RestaurantCard from "@/app/components/RestaurantCard";
import TitleSection from "@/app/components/TitleSection";
import { steps } from "@/app/data";
import { RestaurantCardData } from "@/app/page";
import BookingSelection from "../BookingSelection";

export default function ReservationContainer({
  restaurant,
}: {
  restaurant: RestaurantCardData;
}) {
  const theme = useTheme();
  // const {} = restaurant

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
              <BookingSelection label="DATE SELECTED" value="date" />
            </Grid>
            <Grid size={6}>
              <BookingSelection label="TIME SELECTED" value="Time" />
            </Grid>
            <Grid size={6}>
              <BookingSelection label="GUEST COUNT" value="10" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
