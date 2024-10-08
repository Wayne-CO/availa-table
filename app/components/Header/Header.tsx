import { Box, Typography } from "@mui/material";
import Image from "next/image";
import avaliaTableLogo from "@/public/availatable-logo.svg";
import bannerMain from "@/public/banner-main1.5x.png";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";

export default function Header() {
  return (
    <>
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

      <Box component="main" width="1272px" margin="auto" px="20px" pt="30px">
        <NavBar logoSrc={avaliaTableLogo} logoAlt="Availatable" />

        <Typography
          variant="h1"
          fontSize="60px"
          color="#FFFFFF"
          fontWeight="100"
          pt="36px"
          textAlign="center"
          lineHeight="72px"
        >
          AVAILA
          <Typography
            component="span"
            fontSize="inherit"
            fontWeight="900"
            lineHeight="inherit"
          >
            TABLE
          </Typography>
        </Typography>

        <Box textAlign="center" pt="40px">
          <SearchBar />
        </Box>
      </Box>
    </>
  );
}
