"use client";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";
import { useState } from "react";
import Details from "../Details";
import RestaurantNavBar from "../RestaurantNavBar";

export default function RestaurantContainer({ restaurant }: Props) {
  const [tabValue, setTabValue] = useState(0);
  const params = useParams();

  const tabs = [
    { label: "overview", href: `/restaurant/${params.slug}` },
    { label: "menu", href: `/restaurant/${params.slug}/menu` },
  ];

  const handleTabChange = (event: React.SyntheticEvent, value: number) => {
    setTabValue(value);
  };

  return (
    <>
      <Box padding="10px 0 46px 0">
        <RestaurantNavBar
          tabs={tabs}
          value={tabValue}
          handleTabChange={handleTabChange}
          tabsProps={{ centered: true }}
          tabProps={{ sx: { width: 250 } }}
        />
      </Box>
      {tabValue === 0 && <Details restaurant={restaurant} />}

      {tabValue === 1 && "menu"}
    </>
  );
}
