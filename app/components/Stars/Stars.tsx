import StarIcon from "@mui/icons-material/Star";
import { Rating } from "@mui/material";
import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "@/app/utils/calculate";

type Props = {
  reviews: Review[];
  starSize?: string;
  rating?: number;
};

function Stars({ reviews, starSize = "18px", rating }: Props) {
  const reviewRating =
    rating ?? parseFloat(calculateReviewRatingAverage(reviews).toFixed(1));

  return (
    <Rating
      value={reviewRating}
      precision={0.5}
      sx={{ fontSize: starSize }}
      size={"small"}
      emptyIcon={<StarIcon sx={{ fontSize: starSize }} />}
      readOnly
    />
  );
}

export default Stars;
