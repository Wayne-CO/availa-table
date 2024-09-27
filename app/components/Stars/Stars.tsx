import StarIcon from "@mui/icons-material/Star";
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

  return (
    <Rating
      value={reviewRating}
      precision={0.5}
      sx={{ fontSize: "15px" }}
      size={"small"}
      emptyIcon={<StarIcon sx={{ fontSize: "15px" }} />}
      readOnly
    />
  );
}

export default Stars;
