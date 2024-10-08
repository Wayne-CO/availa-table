import { Box } from "@mui/material";
import { Review } from "@prisma/client";
import TitleSection from "@/app/components/TitleSection";
import ReviewCard from "../ReviewCard";

type Props = {
  reviews: Review[];
};

export default function Reviews({ reviews }: Props) {
  return (
    <>
      <TitleSection title={`Guest Reviews (${reviews.length})`} />
      {reviews.map((review) => (
        <Box pl={2} key={review.id}>
          <ReviewCard review={review} />
        </Box>
      ))}
    </>
  );
}
