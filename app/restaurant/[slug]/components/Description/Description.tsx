import { Box, Typography } from "@mui/material";

type Props = {
  description: string;
};

export default function Description({ description }: Props) {
  return (
    <Box>
      <Box px="64px">
        <Box pb={1}>Stars (To be completed later)</Box>
        <Typography color="text.secondary">{description}</Typography>
      </Box>
    </Box>
  );
}
