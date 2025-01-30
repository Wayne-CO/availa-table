import { z } from "zod";

export const reservationRequestSchema = z.object({
  bookerFirstName: z
    .string()
    .min(2, { message: "First name requires at least 2 characters." }),
  bookerLastName: z
    .string()
    .min(2, { message: "Last name requires at least 2 characters." }),
  bookerPhone: z.string().transform((val, ctx) => {
    const parsed = val.replace(/\s/g, "");

    if (parsed.length < 13) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please provide a 10 digit valid phone number.",
      });

      return z.NEVER;
    }
    return val;
  }),
  bookerEmail: z
    .string()
    .email({ message: "Please provide a valid email address." }),
  bookerOccasion: z.string().nullish(),
  bookerRequest: z.string().nullish(),
});

export type ReservationRequest = z.infer<typeof reservationRequestSchema>;
