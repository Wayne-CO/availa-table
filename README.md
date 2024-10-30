## Getting Started

1. Run the local docker container using Docker desktop.
2. Run Supabase services. `npx supabase start`
3. Run the development server. `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Stop Supabase services:

`npx supabase stop`

## Prisma

Prisma is used as the ORM to work with the Supabase Postgres DB.

### Migrations

Any schema model changes are done through migrations.
