import { Box, useTheme } from "@mui/material";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { RestaurantCardData } from "@/app/page";
import Price from "../Price/Price";

export default function RestaurantCard({
  name,
  location,
  cuisine,
  mainImage,
  price,
}: RestaurantCardData) {
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: 296 }}>
      <CardMedia sx={{ height: "127px" }} image={mainImage} />
      <CardContent
        sx={{
          minHeight: "130px",
          pb: "16px",
        }}
      >
        <Typography
          gutterBottom
          variant="h3"
          fontSize={theme.typography.pxToRem(24)}
          textTransform="capitalize"
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
          mb="2px"
        >
          {name}
        </Typography>

        <Typography
          fontSize={theme.typography.pxToRem(14)}
          mb="2px"
          color="text.secondary"
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          {location.name} • {cuisine.name}
        </Typography>

        <Box display="flex" alignItems="center" pb="2px">
          <Box>
            <Typography pr="5px">5</Typography>
          </Box>
          <Box pr="5px">*****</Box>
          <Box>
            <Typography color="text.secondary" pr="3px">
              (1,234) •
            </Typography>
          </Box>
          <Box>
            <Price price={price} />
          </Box>
        </Box>

        <Typography
          color="text.secondary"
          fontSize={theme.typography.pxToRem(14)}
        >
          Guests who booked today: 100
        </Typography>
      </CardContent>
    </Card>
  );
}
