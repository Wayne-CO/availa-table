import { Box, Typography } from "@mui/material";
import Image from "next/image";
import avaliaTableLogo from "@/public/availatable-logo.svg";
import notFound from "@/public/not-found.png";
import NavBar from "./components/NavBar";

export default function NotFound() {
  return (
    <Box
      sx={{
        background:
          "radial-gradient(54.24% 67.39% at 50% 37.92%, #505050 0%, #2C2C2C 96.12%)",
      }}
    >
      <Box component="main" width="1272px" margin="auto">
        <Box pb="35px" pt="30px">
          <NavBar logoSrc={avaliaTableLogo} logoAlt="Availatable" />
        </Box>
        <Typography
          color="white"
          variant="h1"
          textAlign="center"
          fontSize="60px"
          fontWeight="200"
          pb="50px"
        >
          APOLOGIES FOR THE OVERSIGHT
        </Typography>

        <Box textAlign="center">
          <Image
            alt="Table and Chairs"
            src={notFound}
            quality={100}
            width={1024}
            height={1034}
          />
        </Box>

        <Typography
          fontWeight="400"
          fontSize="10px"
          lineHeight="11.72px"
          textAlign="center"
          color="#FFFFFF99"
          pb="160px"
        >
          Designed by Ember Navarro • Created by Wayne Huang <br /> Copyright ©
          2024 Crafted Origin Media
        </Typography>
      </Box>
    </Box>
  );
}
