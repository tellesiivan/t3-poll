import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "t3-poll/server/api/trpc";

export const listingsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.listing.findMany();
  }),
});
