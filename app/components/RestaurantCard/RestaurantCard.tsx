"use client";

import { CardActionArea, useTheme } from "@mui/material";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import { RestaurantCardData } from "@/app/page";
import RatingReview from "../RatingReview/RatingReview";

type Props = {
  restaurant: RestaurantCardData;
};

export default function RestaurantCard({ restaurant }: Props) {
  const theme = useTheme();
  const { mainImage, name, cuisine, location, price, slug, reviews } =
    restaurant;

  return (
    <Card sx={{ width: 296 }}>
      <CardActionArea LinkComponent={Link} href={`/restaurant/${slug}`}>
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
            lineHeight="32px"
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
            textTransform="capitalize"
          >
            {location.name} • {cuisine.name}
          </Typography>

          <RatingReview reviews={reviews} price={price} />

          <Typography color="text.secondary" variant="body2">
            Guests who booked today: 100
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
