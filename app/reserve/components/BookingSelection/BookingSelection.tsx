import { Box, Typography } from "@mui/material";

type Props = {
  label: string;
  value: string;
};

export default function BookingSelection({ label, value }: Props) {
  return (
    <Box
      border="1px solid #D3D3D3"
      borderRadius="4px"
      textAlign="center"
      p="20px 0 29px"
    >
      <Typography
        pb="8px"
        color="#808080"
        fontWeight="500"
        fontSize="14px"
        letterSpacing="0.4px"
        lineHeight="24px"
      >
        {label}
      </Typography>
      <Typography
        color="text.primary"
        fontSize="24px"
        fontWeight="700"
        lineHeight="32.02px"
      >
        {value}
      </Typography>
    </Box>
  );
}
