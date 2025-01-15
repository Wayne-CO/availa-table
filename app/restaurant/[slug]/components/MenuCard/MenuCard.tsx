import { Box, Typography } from "@mui/material";

type Props = {
  name: string;
  price: string;
  description: string;
};

export default function MenuCard({ name, price, description }: Props) {
  return (
    <Box sx={{ padding: "10px", border: "0.5px solid #00000026" }}>
      <Box sx={{ height: 148 }}>
        <Box display="flex" pb={1} justifyContent="space-between">
          <Typography
            variant="subtitle2"
            maxWidth={218}
            sx={{
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
              letterSpacing: "0.1px",
              textTransform: "capitalize",
            }}
          >
            {name}
          </Typography>
          <Typography variant="subtitle2">{price}</Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
            letterSpacing: "0.1px",
            color: "#00000099",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
