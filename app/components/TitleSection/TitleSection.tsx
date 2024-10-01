"use client";
import { Box, Typography, useTheme } from "@mui/material";

type Props = {
  title: string;
};

export default function TitleSection({ title }: Props) {
  const theme = useTheme();

  return (
    <Box display="flex" alignItems="center" p="16px 30px">
      <Typography
        variant="h2"
        fontSize={theme.typography.pxToRem(24)}
        flexShrink="0"
        pr="30px"
        textTransform="capitalize"
        fontWeight="400"
      >
        {title}
      </Typography>
      <Box borderBottom="1px solid #0000001F" width="100%"></Box>
    </Box>
  );
}
