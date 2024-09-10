import { Box, Typography } from "@mui/material";
import { Review } from "@prisma/client";

type Props = {
  reviews: Review[];
};

export default function Rating({ reviews }: Props) {
  return (
    <Box display="flex" alignItems="center" pb="2px">
      <Box>
        <Typography pr="5px">5</Typography>
      </Box>
      <Box pr="5px">*****</Box>
      <Box>
        <Typography color="text.secondary" pr="3px" variant="body2">
          ({reviews.length}) •
        </Typography>
      </Box>
    </Box>
  );
}
