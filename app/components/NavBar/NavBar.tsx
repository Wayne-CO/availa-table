import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  logoSrc: StaticImageData;
  logoAlt: string;
};

export default function NavBar({ logoSrc, logoAlt }: Props) {
  return (
    <>
      <Box display="flex">
        <Link href="/">
          <Image alt={logoAlt} src={logoSrc} />
        </Link>
      </Box>
    </>
  );
}
