import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { RestaurantCardData } from "@/app/page";
import { Box } from "@mui/material";

export default function RestaurantCard({
  name,
  location,
  cuisine, // mainImage,
} // price,
: RestaurantCardData) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {name}
        </Typography>
        <Typography>
          {location.name} • {cuisine.name}
        </Typography>
        <Box>
          <Box>*****</Box>
          <Box>
            <Typography>1234 Reviews</Typography>
          </Box>
        </Box>

        <Box>
          <Box>$$$$$</Box>
          <Box>
            <Typography>$100-200 per guest</Typography>
          </Box>
        </Box>

        <Typography>Guests who booked today: 100</Typography>
      </CardContent>
    </Card>
  );
}
