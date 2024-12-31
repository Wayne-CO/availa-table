import { Box } from "@mui/material";
import Image from "next/image";
import footerSearch from "@/public/footer-search.png";

export default function Footer() {
  return (
    <>
      <Box
        position="absolute"
        height="384px"
        width="100%"
        overflow="hidden"
        zIndex="-1"
      >
        <Image
          alt="Spoon and Fork | Crafted Origin"
          src={footerSearch}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        component="main"
        width="1272px"
        margin="auto"
        px="20px"
        pt="40px"
      ></Box>
    </>
  );
}
