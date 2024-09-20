import { Avatar, Box, Typography } from "@mui/material";
import { Review } from "@prisma/client";

type Props = {
  review: Review;
};

export default function ReviewCard({ review }: Props) {
  return (
    <>
      <Box display="flex">
        <Avatar sx={{ bgcolor: "#2196F3" }}>
          {review.firstName[0]}
          {review.lastName[0]}
        </Avatar>
        <Box>
          <Box>Stars</Box>
          <Typography>
            {review.firstName} {review.lastName}
          </Typography>
          <Typography>{review.text}</Typography>
        </Box>
      </Box>
    </>
  );
}
