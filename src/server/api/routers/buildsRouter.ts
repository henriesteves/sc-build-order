import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const buildsRouter = createTRPCRouter({
  createBuild: publicProcedure
    .input(z.object({ matchUp: z.string(), build: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const build = await ctx.prisma.buildOrder.create({
        data: {
          matchUp: input.matchUp,
          build: input.build,
        },
      });

      return build;
    }),

  getBuilds: publicProcedure
    .query(async ({ ctx }) => {
      const builds = await ctx.prisma.buildOrder.findMany();

      return builds;
    }),
});
