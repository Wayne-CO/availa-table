import { Box, Paper, Typography } from "@mui/material";

type Props = {
  name: string;
  price: string;
  description: string;
};

export default function MenuCard({ name, price, description }: Props) {
  return (
    <Paper sx={{ padding: "10px" }}>
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
          }}
        >
          {description}
        </Typography>
      </Box>
    </Paper>
  );
}
