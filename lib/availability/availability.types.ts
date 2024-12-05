import { z } from "zod";

const availabilitySchema = z.array(
  z.object({
    time: z.string(),
    available: z.boolean(),
  }),
);

export type Availability = z.infer<typeof availabilitySchema>;
