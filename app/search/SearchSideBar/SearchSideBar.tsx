import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

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
  return (
    <div>
      <div>
        <h3>Location</h3>
        <ul>
          {locations.map((location) => {
            return (
              <li key={location.id}>
                <Link
                  href={{
                    pathname: "search",
                    query: {
                      ...searchParams,
                      city: location.name,
                    },
                  }}
                >
                  {location.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
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
    </div>
  );
}
