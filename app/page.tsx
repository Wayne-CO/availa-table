import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import { prisma } from "lib/prisma";
import RestaurantCard from "./components/RestaurantCard";

import avaliaTableLogo from "../public/availatable-logo.svg";
import bannerMain from "../public/banner-main.svg";

type RestaurantsCardData = Prisma.PromiseReturnType<typeof fetchRestaurants>;

export type RestaurantCardData = RestaurantsCardData[0];

const fetchRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      mainImage: true,
      price: true,
      slug: true,
      cuisine: {
        select: {
          name: true,
        },
      },
      location: {
        select: {
          name: true,
        },
      },
    },
  });

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <Box>
      <Box
        position="absolute"
        height="696px"
        width="100%"
        overflow="hidden"
        zIndex="-1"
      >
        <Image
          alt="Table and Chairs"
          src={bannerMain}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </Box>

      <Box component="main" width="1272px" margin="auto" px="20px" pt="40px">
        <Box display="flex">
          <Image alt="Availatable" src={avaliaTableLogo} />
        </Box>

        <Typography
          variant="h1"
          fontSize="60px"
          color="#FFFFFF"
          fontWeight="200"
          pt="36px"
          textAlign="center"
        >
          AVAILA
          <Typography component="span" fontSize="inherit" fontWeight="900">
            TABLE
          </Typography>
        </Typography>

        <Box textAlign="center" pt="40px">
          <TextField
            id="input-with-icon-textfield"
            placeholder="State, city, or town..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{
              width: "815px",
              // To not back background color spill over border with radius applied.
              overflow: "hidden",
              "& .MuiOutlinedInput-root": {
                background: "#fff",
              },
            }}
          />
          <Box pt="16px" pb="278px">
            <Button
              variant="contained"
              sx={{ width: "192px", background: "#2196F3" }}
            >
              FIND
            </Button>
          </Box>
        </Box>

        <Box component="main">
          <Grid container spacing={2}>
            {restaurants.map((restaurant) => (
              <Grid key={restaurant.id}>
                <RestaurantCard restaurant={restaurant} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
