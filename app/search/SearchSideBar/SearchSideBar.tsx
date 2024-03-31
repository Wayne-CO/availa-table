import { Cuisine, Location } from "@prisma/client";

type Props = {
  locations: Location[];
  cuisines: Cuisine[];
};
export default function SearchSideBar({ locations, cuisines }: Props) {
  return (
    <div>
      <div>
        <h3>Location</h3>
        <ul>
          {locations.map((location) => {
            return <li key={location.id}>{location.name}</li>;
          })}
        </ul>
      </div>
      <div>
        <h3>Cuisine</h3>
        <ul>
          {cuisines.map((cuisine) => {
            return <li key={cuisine.id}>{cuisine.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
