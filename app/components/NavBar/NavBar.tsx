import { Box } from "@mui/material";
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
    </>
  );
}
