import { Dispatch, SetStateAction, createContext } from "react";

export const RecipeDetailContext = createContext<{
  recipeDetail: Recipe | null;
  setRecipeDetail: Dispatch<SetStateAction<Recipe | null>> | null;
}>({ recipeDetail: null, setRecipeDetail: null });
