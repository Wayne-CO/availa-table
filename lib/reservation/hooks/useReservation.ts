import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/app/utils/axiosInstance";
import { ReservationRequest } from "..";

async function reservation({
  slug,
  day,
  time,
  partySize,
  bookerEmail,
  bookerPhone,
  bookerFirstName,
  bookerLastName,
  bookerOccasion,
  bookerRequest,
}: {
  slug: string;
  day: string;
  time: string;
  partySize: string;
} & ReservationRequest) {
  const apiEndpoint = `http://localhost:3000/api/restaurant/${slug}/reserve?day=${day}&time=${time}&partySize=${partySize}`;
  return axiosInstance.post(apiEndpoint, {
    bookerFirstName,
    bookerLastName,
    bookerPhone,
    bookerEmail,
    bookerOccasion,
    bookerRequest,
  });
}

export function useReservation() {
  return useMutation({
    mutationFn: reservation,
  });
}
