import { Box } from "@mui/material";
import Image from "next/image";
import avaliaTableLogo from "@/public/availatable-logo.svg";
import bannerMain from "@/public/banner-main.svg";
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

      <Box component="main" width="1272px" margin="auto" px="20px" pt="40px">
        <NavBar logoSrc={avaliaTableLogo} logoAlt="Availatable" />

        <Box textAlign="center" pt="40px">
          <SearchBar />
        </Box>
      </Box>
    </>
  );
}
