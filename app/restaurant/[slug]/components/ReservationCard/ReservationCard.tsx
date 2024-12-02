import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import TitleSection from "@/app/components/TitleSection";
import { partySizes, times } from "@/app/data";

const steps = ["Choose", "Book", "Confirm"];

const optionalLabels = [
  <Typography key={0} variant="caption" color="text.primary">
    Restaurant
  </Typography>,
  <Typography key={1} variant="caption" color="text.primary">
    Date and Time
  </Typography>,
  <Typography key={2} variant="caption" color="text.primary">
    Reservation
  </Typography>,
];

export default function ReservationCard({
  openTime,
  closeTime,
  slug,
}: {
  openTime: string;
  closeTime: string;
  slug: string;
}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(1);
  const [partySize, setPartySize] = useState("2");
  const [time, setTime] = useState(openTime);

  const filterTimeByRestaurantOpenWindow = () => {
    const timesWithinWindow: typeof times = [];

    let isWithinWindow = false;

    times.forEach((time) => {
      if (time.time === openTime) {
        isWithinWindow = true;
      }

      if (isWithinWindow) {
        timesWithinWindow.push(time);
      }

      if (time.time === closeTime) {
        isWithinWindow = false;
      }
    });

    return timesWithinWindow;
  };

  return (
    <Paper>
      <Typography
        variant="h2"
        fontSize={theme.typography.pxToRem(24)}
        fontWeight="700"
        textAlign="center"
        padding="46px 30px"
      >
        Make a Reservation
      </Typography>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          "& .MuiStepConnector-root": {
            top: "41px",
            width: "32px",
            margin: " 0 auto",
          },
          pb: theme.typography.pxToRem(30),
        }}
      >
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel optional={optionalLabels[index]}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <TitleSection title="Booking Details" />
      <Grid container p="16px 40px" rowSpacing="24px" columnSpacing="16px">
        <Grid xs={6}>
          <FormControl fullWidth>
            <InputLabel id="booking-party-size">Party Size</InputLabel>
            <Select
              labelId="booking-party-size-label"
              id="select-party-size"
              value={partySize}
              label="Party Size"
              onChange={(e) => setPartySize(e.target.value)}
            >
              {partySizes.map(({ value, label }) => {
                return (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={6}>
          <FormControl fullWidth>
            <InputLabel id="booking-time">Time</InputLabel>
            <Select
              labelId="booking-time-label"
              id="select-time"
              value={time}
              label="Time"
              onChange={(e) => setTime(e.target.value)}
            >
              {filterTimeByRestaurantOpenWindow().map(
                ({ time, displayTime }) => {
                  return (
                    <MenuItem key={time} value={time}>
                      {displayTime}
                    </MenuItem>
                  );
                },
              )}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
}
