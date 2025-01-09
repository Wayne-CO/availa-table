import { Box, Typography } from "@mui/material";
import { Cuisine, Location, Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "@/app/utils/calculate";
import Stars from "../Stars";

type Props = {
  reviews: Review[];
  location: Location;
  cuisine: Cuisine;
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
          {location.name} • {cuisine.name}
        </Typography>
      </Box>
    </Box>
  );
}
