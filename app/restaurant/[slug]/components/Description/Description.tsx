import { Box, Typography } from "@mui/material";
import TitleSection from "@/app/components/TitleSection";

type Props = {
  title: string;
  description: string;
};

export default function Description({ title, description }: Props) {
  return (
    <Box>
      <Box p="30px 16px">
        <TitleSection title={title} />
      </Box>
      <Box px={6}>
        <Box pb={1}>Stars</Box>
        <Typography color="text.secondary">{description}</Typography>
      </Box>
    </Box>
  );
}
