import {
  Button,
  ButtonProps,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { format } from "date-fns";
import Link from "next/link";
import { useState } from "react";
import ReservationStepper from "@/app/components/ReservationStepper";
import TitleSection from "@/app/components/TitleSection";
import { partySizes, steps, times } from "@/app/data";
import { useAvailabilityQuery } from "@/lib/availability";

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
  const [partySize, setPartySize] = useState("2");
  const [time, setTime] = useState(openTime);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);
  const { availabilityQuery } = useAvailabilityQuery({
    day,
    partySize,
    slug,
    time,
  });

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

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const day = date.toISOString().split("T")[0];
      setDay(day);

      return setSelectedDate(date);
    }

    return setSelectedDate(null);
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

      <ReservationStepper
        steps={steps}
        activeStep={1}
        sxStepper={{
          "& .MuiStepConnector-root": {
            top: "41px",
            width: "32px",
            margin: " 0 auto",
          },
          pb: theme.typography.pxToRem(30),
        }}
      />

      <TitleSection title="Booking Details" />
      <Grid container p="16px 40px" rowSpacing="24px" columnSpacing="16px">
        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel id="booking-party-size">Guest Count</InputLabel>
            <Select
              labelId="booking-party-size-label"
              id="select-party-size"
              value={partySize}
              label="Guest Count"
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
        <Grid size={6}>
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

        <Grid size={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <FormControl fullWidth>
              <DatePicker
                label="Date"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </FormControl>
          </LocalizationProvider>
        </Grid>
      </Grid>

      <TitleSection title="Available Time" />

      <Typography
        fontSize="12px"
        letterSpacing="0.15px"
        lineHeight="12px"
        textAlign="center"
        p="16px 40px"
      >
        Upon selecting a time, you will be automatically directed to the next
        page to confirm your reservation.
      </Typography>

      <Grid container p="16px 40px 46px" rowSpacing="24px" columnSpacing="16px">
        {availabilityQuery.data &&
          availabilityQuery.data.map(({ time, available }) => {
            const buttonSharedProps: ButtonProps = {
              LinkComponent: Link,
              color: "error",
              variant: "contained",
              fullWidth: true,
            };

            const buttonSharedSx: SxProps = {
              fontSize: "15px",
              lineHeight: "26px",
              p: "8px 16px",
            };

            const localTime = format(
              new Date(`${day} ${time.slice(0, time.length - 1)}`),
              "p",
            );

            return (
              <Grid key={time} size={6}>
                {available ? (
                  <Button
                    {...buttonSharedProps}
                    sx={{ ...buttonSharedSx, color: "white" }}
                    color="red"
                    href={`/reserve/${slug}?date=${day}T${time}&partySize=${partySize}`}
                  >
                    {localTime}
                  </Button>
                ) : (
                  <Button
                    {...buttonSharedProps}
                    sx={{ ...buttonSharedSx, color: "#00000061" }}
                    color="gray"
                    disabled
                  >
                    {localTime}
                  </Button>
                )}
              </Grid>
            );
          })}

        {availabilityQuery.isLoading && (
          <Grid size={12} textAlign="center">
            <CircularProgress />
          </Grid>
        )}

        {availabilityQuery.error && (
          <Grid size={12}>
            <Typography>Error in retrieving availability</Typography>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
