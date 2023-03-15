import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const recipeRouter = createTRPCRouter({
  postMessage: publicProcedure
    .input(
      z.object({
        name: z.string(),
        ingredients: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.recipe.create({
          data: {
            name: input.name,
            ingredients: input.ingredients,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});