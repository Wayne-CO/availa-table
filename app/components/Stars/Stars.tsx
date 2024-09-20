import { Rating } from "@mui/material";
import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "@/app/utils/calculate";

type Props = {
  reviews: Review[];
  rating?: number;
};

function Stars({ reviews, rating }: Props) {
  const reviewRating =
    rating ?? parseFloat(calculateReviewRatingAverage(reviews).toFixed(1));

  return <Rating value={reviewRating} precision={0.5} size="small" readOnly />;
}

export default Stars;
