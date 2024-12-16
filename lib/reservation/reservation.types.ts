import { z } from "zod";

export const reservationRequestSchema = z.object({
  bookerFirstName: z.string(),
  bookerLastName: z.string(),
  bookerPhone: z.string(),
  bookerEmail: z.string(),
  bookerOccasion: z.string().nullish(),
  bookerRequest: z.string().nullish(),
});

export type ReservationRequest = z.infer<typeof reservationRequestSchema>;
