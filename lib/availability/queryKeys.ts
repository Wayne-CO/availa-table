export type availabilityFilter = {
  day: string;
  time: string;
  partySize: string;
  slug: string;
};

export const availabilityKeys = {
  all: [{ entity: "availability" }] as const,
  lists: () => [{ ...availabilityKeys.all[0], scope: "list" }] as const,
  list: (filter: availabilityFilter) =>
    [{ ...availabilityKeys.lists()[0], filter }] as const,
};
