import { Box, Typography } from "@mui/material";
import { PRICE, Review } from "@prisma/client";
import React from "react";
import { calculateReviewRatingAverage } from "@/app/utils/calculate";
import Price from "../Price/Price";
import Stars from "../Stars";

type Props = {
  reviews: Review[];
  price: PRICE;
};

export default function RatingReview({ reviews, price }: Props) {
  return (
    <Box display="flex" pb="2px" alignItems="center">
      <Box>
        <Typography variant="body2" pr="5px" color="text.secondary">
          {calculateReviewRatingAverage(reviews).toFixed(1)}
        </Typography>
      </Box>
      <Box display="inline-flex" pr="5px">
        <Stars reviews={reviews} />
      </Box>
      <Box>
        <Typography color="text.secondary" pr="3px" variant="body2">
          ({reviews.length}) •
        </Typography>
      </Box>
      <Price price={price} />
    </Box>
  );
}
