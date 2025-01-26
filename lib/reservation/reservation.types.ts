import { z } from "zod";

export const reservationRequestSchema = z.object({
  bookerFirstName: z
    .string()
    .min(2, { message: "First name requires at least 2 characters." }),
  bookerLastName: z
    .string()
    .min(2, { message: "Last name requires at least 2 characters." }),
  bookerPhone: z.string(),
  bookerEmail: z
    .string()
    .email({ message: "Please provide a valid email address." }),
  bookerOccasion: z.string().nullish(),
  bookerRequest: z.string().nullish(),
});

export type ReservationRequest = z.infer<typeof reservationRequestSchema>;
