"use client";
import { Paper } from "@mui/material";
import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";
import FilterSection from "../components/FilterSection";

const prices = [
  { price: PRICE.CHEAP, label: "$" },
  { price: PRICE.REGULAR, label: "$$" },
  { price: PRICE.EXPENSIVE, label: "$$$" },
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
  const [city, setCity] = useState(currentCity);

  const handleCityChange = (event: React.SyntheticEvent, cityIndex: number) => {
    setCity(cityIndex);
  };

  return (
    <Paper sx={{ width: "400px" }}>
      <FilterSection
        title="Cities"
        filters={locations}
        searchParams={searchParams}
        value={city}
        handleValueChange={handleCityChange}
      />

      <div>
        <h3>Cuisine</h3>
        <ul>
          {cuisines.map((cuisine) => {
            return (
              <li key={cuisine.id}>
                <Link
                  href={{
                    pathname: "search",
                    query: {
                      ...searchParams,
                      cuisine: cuisine.name,
                    },
                  }}
                >
                  {cuisine.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3>Price</h3>
        <ul>
          {prices.map((price) => {
            return (
              <li key={price.label}>
                <Link
                  href={{
                    pathname: "search",
                    query: {
                      ...searchParams,
                      price: price.price,
                    },
                  }}
                >
                  {price.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Paper>
  );
}
