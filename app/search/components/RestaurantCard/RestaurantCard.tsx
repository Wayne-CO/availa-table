"use client";

import { Box, CardActionArea, useTheme } from "@mui/material";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import RatingReview from "@/app/components/RatingReview";
import { RestaurantCardData } from "@/app/page";

type Props = {
  restaurant: RestaurantCardData;
};

export default function RestaurantCard({ restaurant }: Props) {
  const theme = useTheme();
  const { mainImage, name, reviews, cuisine, location, price, slug } =
    restaurant;

  return (
    <Card>
      <CardActionArea LinkComponent={Link} href={`/restaurant/${slug}`}>
        <Box display="flex">
          <CardMedia
            sx={{ width: "172px", height: "148px", m: "10px" }}
            image={mainImage}
          />
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
        </Box>
      </CardActionArea>
    </Card>
  );
}
