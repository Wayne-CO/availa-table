import { Box, Typography, useTheme } from "@mui/material";

type Props = {
  title: string;
  description: string;
};

export default function Description({ title, description }: Props) {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h2"
        fontSize={theme.typography.pxToRem(24)}
        p="16px 30px"
      >
        {title}
      </Typography>
      <Box px={6}>
        <Box pb={1}>Stars</Box>
        <Typography color="text.secondary">{description}</Typography>
      </Box>
    </Box>
  );
}
