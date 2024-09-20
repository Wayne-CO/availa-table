import { Rating } from "@mui/material";
import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "@/app/utils/calculate";

type Props = {
  reviews: Review[];
};

function Stars({ reviews }: Props) {
  const rating = parseFloat(calculateReviewRatingAverage(reviews).toFixed(1));

  return <Rating value={rating} precision={0.5} readOnly />;
}

export default Stars;
