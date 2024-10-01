import { Box, Typography } from "@mui/material";
import { Review } from "@prisma/client";
import Rating from "@/app/components/Rating";

type Props = {
  description: string;
  reviews: Review[];
};

export default function Description({ description, reviews }: Props) {
  return (
    <Box px="64px" py="16px">
      <Box pb={1}>
        <Rating reviews={reviews} />
      </Box>
      <Typography color="text.secondary">{description}</Typography>
    </Box>
  );
}
