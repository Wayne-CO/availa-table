"use client";
import { Box, Grid2 as Grid, Paper } from "@mui/material";
import { useState } from "react";
import { RestaurantDetails } from "../../page";
import Details from "../Details";
import Menu from "../Menu";
import ReservationCard from "../ReservationCard";
import RestaurantNavBar from "../RestaurantNavBar";

type Props = {
  restaurant: RestaurantDetails;
};

export default function RestaurantContainer({ restaurant }: Props) {
  const [tabValue, setTabValue] = useState(0);
  const tabs = [{ label: "overview" }, { label: "menu" }];

  const handleTabChange = (event: React.SyntheticEvent, value: number) => {
    setTabValue(value);
  };

  return (
    <Grid container spacing={2} mt={8}>
      <Grid size={8}>
        <Paper sx={{ padding: "10px 0 46px 0" }}>
          <Box pb={5.75}>
            <RestaurantNavBar
              tabs={tabs}
              value={tabValue}
              handleTabChange={handleTabChange}
              tabsProps={{
                centered: true,
                sx: {
                  "& .MuiTab-root.Mui-selected": {
                    color: "#2196F3",
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#2196F3",
                  },
                },
              }}
              tabProps={{
                sx: {
                  width: 250,
                  letterSpacing: "0.02857em",
                  pb: "9px",
                },
              }}
            />
          </Box>
          {tabValue === 0 && <Details restaurant={restaurant} />}

          {tabValue === 1 && <Menu restaurant={restaurant} />}
        </Paper>
      </Grid>

      <Grid size={4}>
        <ReservationCard
          openTime={restaurant.openTime}
          closeTime={restaurant.closeTime}
          slug={restaurant.slug}
        />
      </Grid>
    </Grid>
  );
}
