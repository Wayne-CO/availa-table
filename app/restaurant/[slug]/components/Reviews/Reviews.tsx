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
        <ReviewCard review={review} key={review.id} />
      ))}
    </>
  );
}
