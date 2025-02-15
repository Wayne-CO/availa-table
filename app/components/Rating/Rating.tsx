import { Box, Typography } from "@mui/material";
import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "@/app/utils/calculate";
import Stars from "../Stars";

type Props = {
  reviews: Review[];
  location: { name: string };
  cuisine: { name: string };
};

export default function Rating({ reviews, location, cuisine }: Props) {
  return (
    <Box display="flex" alignItems="end">
      <Box>
        <Typography pr="5px" variant="subtitle2">
          {calculateReviewRatingAverage(reviews).toFixed(1)}
        </Typography>
      </Box>
      <Box pr="5px" display="inline-flex">
        <Stars reviews={reviews} starSize="24px" />
      </Box>
      <Box>
        <Typography color="text.primary" pr="3px" variant="subtitle2">
          {reviews.length} Review{reviews.length === 1 ? "" : "s"} •{" "}
          <Box component="span" sx={{ textTransform: "capitalize" }}>
            {location.name} • {cuisine.name}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}
