import { Box, Typography } from "@mui/material";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import avaliaTableLogo from "@/public/availatable-logo.svg";
import bannerSearch from "@/public/banner-search.png";

export default function Header() {
  return (
    <>
      <Box
        position="absolute"
        height="474px"
        width="100%"
        overflow="hidden"
        zIndex="-1"
      >
        <Image
          alt="Chairs"
          src={bannerSearch}
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
        >
          SEARCH RESULTS
        </Typography>

        <Box textAlign="center" pt="40px">
          <SearchBar />
        </Box>
      </Box>
    </>
  );
}
