import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";
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
    <Card sx={{ maxWidth: 368 }}>
      <CardMedia sx={{ height: "200px" }} image={mainImage} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          fontSize={theme.typography.pxToRem(24)}
        >
          {name}
        </Typography>

        <Typography fontSize={theme.typography.pxToRem(14)} mb="8px">
          {location.name} • {cuisine.name}
        </Typography>

        <Box display="flex" alignItems="center">
          <Box pr="5px">*****</Box>
          <Box>
            <Typography color="text.secondary">1234 Reviews</Typography>
          </Box>
        </Box>

        <Box mb="8px">
          <Box>
            <Price price={price} />
          </Box>
        </Box>

        <Typography
          color="text.primary"
          fontSize={theme.typography.pxToRem(20)}
          fontWeight="500"
        >
          Guests who booked today: 100
        </Typography>
      </CardContent>
    </Card>
  );
}
