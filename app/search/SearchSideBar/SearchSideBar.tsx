"use client";
import { Paper } from "@mui/material";
import { Cuisine, Location, PRICE } from "@prisma/client";
import { useState } from "react";
import FilterSection from "../components/FilterSection";

export type PriceFilter = { id: PRICE; name: PRICE; label: string }[];

const prices: PriceFilter = [
  { id: PRICE.CHEAP, name: PRICE.CHEAP, label: "$" },
  { id: PRICE.REGULAR, name: PRICE.REGULAR, label: "$$" },
  { id: PRICE.EXPENSIVE, name: PRICE.EXPENSIVE, label: "$$$" },
];

type Props = {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: string };
};

export default function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: Props) {
  const currentCity = locations.findIndex(
    (location) => location.name === searchParams.city,
  );
  const currentCuisine = cuisines.findIndex(
    (cuisine) => cuisine.name === searchParams.cuisine,
  );
  const currentPrice = prices.findIndex(
    (price) => price.name === searchParams.price,
  );

  const [city, setCity] = useState(currentCity);
  const [cuisine, setCuisine] = useState(currentCuisine);
  const [price, setPrice] = useState(currentPrice);

  const handleCityChange = (event: React.SyntheticEvent, cityIndex: number) => {
    setCity(cityIndex);
  };

  const handleCuisineChange = (
    event: React.SyntheticEvent,
    cuisineIndex: number,
  ) => {
    setCuisine(cuisineIndex);
  };

  const handlePriceChange = (
    event: React.SyntheticEvent,
    priceIndex: number,
  ) => {
    setPrice(priceIndex);
  };

  return (
    <Paper sx={{ width: "400px" }}>
      <FilterSection
        title="Cities"
        filters={locations}
        searchParams={searchParams}
        searchQuery="city"
        value={city}
        handleValueChange={handleCityChange}
      />

      <div>
        <FilterSection
          title="Cuisine"
          filters={cuisines}
          searchParams={searchParams}
          value={cuisine}
          searchQuery="cuisine"
          handleValueChange={handleCuisineChange}
        />
      </div>
      <div>
        <FilterSection
          title="Price"
          filters={prices}
          searchParams={searchParams}
          value={price}
          searchQuery="price"
          handleValueChange={handlePriceChange}
        />
      </div>
    </Paper>
  );
}
