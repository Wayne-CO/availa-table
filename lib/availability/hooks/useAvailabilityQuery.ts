import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { availabilityFilter, availabilityKeys } from "..";
import { axiosInstance } from "../../../app/utils/axiosInstance";
import { Availability } from "../availability.types";

async function fetchAvailability({
  queryKey: [
    {
      filter: { day, partySize, slug, time },
    },
  ],
}: QueryFunctionContext<
  ReturnType<(typeof availabilityKeys)["list"]>
>): Promise<Availability> {
  const config = {
    method: "GET",
    url: `http://localhost:3000/api/restaurant/${slug}/availability?day=${day}&time=${time}&partySize=${partySize}`,
  };

  const { data } = await axiosInstance(config);

  return data;
}

export function useAvailabilityQuery({
  day,
  partySize,
  slug,
  time,
}: availabilityFilter) {
  const availabilityQuery = useQuery({
    queryKey: availabilityKeys.list({ day, partySize, slug, time }),
    queryFn: fetchAvailability,
  });

  return { availabilityQuery };
}
