import { Box, Typography } from "@mui/material";
import { Review } from "@prisma/client";
import Rating from "@/app/components/Rating";

type Props = {
  description: string;
  reviews: Review[];
  location: { name: string };
  cuisine: { name: string };
};

export default function Description({
  description,
  reviews,
  location,
  cuisine,
}: Props) {
  return (
    <Box px="64px" py="16px">
      <Box pb="6px">
        <Rating reviews={reviews} location={location} cuisine={cuisine} />
      </Box>
      <Typography color="text.secondary">{description}</Typography>
    </Box>
  );
}
