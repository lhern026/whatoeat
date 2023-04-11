import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "../../utils/api";

const RecipeEntries = () => {
  const { data: RecipeEntries, isLoading } = api.recipeRouter.getAll.useQuery();

  if (isLoading) return <div>Fetching recipes...</div>;
  return (
    <div className="relative overflow-x-auto">
      {RecipeEntries?.map((entry, index) => {
        return (
          <table
            className="text-gray-500 dark:text-gray-400 w-full text-left text-sm"
            key={index}
          >
            <thead className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-xs uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Recipe
                </th>
                <th scope="col" className="px-6 py-3">
                  Ingredients
                </th>
                <th scope="col" className="px-6 py-3">
                  User
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-b">
                <td className="px-6 py-4 text-center">{entry.name}</td>
                <td className="px-6 py-4 text-center">{entry.ingredients}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default RecipeEntries;
