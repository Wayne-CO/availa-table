"use client";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useParams } from "next/navigation";
import { useState } from "react";
import TitleSection from "@/app/components/TitleSection";
import Description from "../Description";
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
      {tabValue === 0 && (
        <Box>
          <Box pb={2}>
            <TitleSection title="restaurant details" />
          </Box>
          <Grid container pb="62px">
            <Grid xs={12}>
              <Description description={restaurant.description} />
            </Grid>
          </Grid>

          {/* <Box pb={4}>
          <TitleSection title="photos" />
        </Box>
        <Grid container>
          <Grid xs={12}>
            <PhotoList
              photos={restaurant.images}
              photoWidth={226}
              photoHeight={175}
            />
          </Grid>
        </Grid> */}
        </Box>
      )}

      {tabValue === 1 && "menu"}
    </>
  );
}
