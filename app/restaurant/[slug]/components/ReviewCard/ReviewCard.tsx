import { Avatar, Box, Typography } from "@mui/material";
import { Review } from "@prisma/client";
import Stars from "@/app/components/Stars";

type Props = {
  review: Review;
};

export default function ReviewCard({ review }: Props) {
  return (
    <Box display="flex" pl={6} pb={4}>
      <Box pr={1}>
        <Avatar sx={{ bgcolor: "#2196F3" }}>
          {review.firstName[0]}
          {review.lastName[0]}
        </Avatar>
      </Box>
      <Box>
        <Stars rating={review.rating} />
        <Typography variant="subtitle2" pb={1}>
          {review.firstName} {review.lastName}
        </Typography>
        <Typography color="text.secondary">{review.text}</Typography>
      </Box>
    </Box>
  );
}
