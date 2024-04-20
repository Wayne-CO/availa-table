import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

type Props = {
  logoSrc: StaticImageData;
  logoAlt: string;
};

export default function NavBar({ logoSrc, logoAlt }: Props) {
  return (
    <>
      <Box display="flex">
        <Image alt={logoAlt} src={logoSrc} />
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
    </>
  );
}
