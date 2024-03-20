"use client";
import { Box, Paper } from "@mui/material";
import { useState } from "react";
import { RestaurantDetails } from "../../page";
import Details from "../Details";
import Menu from "../Menu";
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
    <Paper sx={{ width: 816, padding: "10px 0 46px 0", mt: 8 }}>
      <Box pb={5.75}>
        <RestaurantNavBar
          tabs={tabs}
          value={tabValue}
          handleTabChange={handleTabChange}
          tabsProps={{ centered: true }}
          tabProps={{ sx: { width: 250 } }}
        />
      </Box>
      {tabValue === 0 && <Details restaurant={restaurant} />}

      {tabValue === 1 && <Menu restaurant={restaurant} />}
    </Paper>
  );
}
