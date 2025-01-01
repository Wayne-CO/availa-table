import { Box, Typography } from "@mui/material";
import Image from "next/image";
import avaliaTableLogo from "@/public/availatable-logo.svg";
import bannerSearch from "@/public/banner-search.png";
import NavBar from "../NavBar";

type Props = {
  restaurantName: string;
};

export default function Header({ restaurantName }: Props) {
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
          textAlign="center"
          fontWeight="200"
          lineHeight="72px"
          fontSize="60px"
          color="white"
          p="86px 0 80px"
        >
          {restaurantName}
        </Typography>
      </Box>
    </>
  );
}
