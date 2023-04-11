import { z } from "zod";
import { createTRPCRouter, protectedProcedure,publicProcedure } from "../trpc";

export const recipeRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.recipe.findMany({
        select: {
          name: true,
          ingredients: true,
          
      
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  }),
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
