import { Box, Typography } from "@mui/material";
import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "@/app/utils/calculate";
import Stars from "../Stars";

type Props = {
  reviews: Review[];
};

export default function Rating({ reviews }: Props) {
  return (
    <Box display="flex" alignItems="center" pb="2px">
      <Box>
        <Typography pr="5px">
          {calculateReviewRatingAverage(reviews).toFixed(1)}
        </Typography>
      </Box>
      <Box pr="5px">
        <Stars reviews={reviews} />
      </Box>
      <Box>
        <Typography color="text.secondary" pr="3px" variant="body2">
          {reviews.length} Review{reviews.length === 1 ? "" : "s"}
        </Typography>
      </Box>
    </Box>
  );
}
