import { Dispatch, SetStateAction, createContext } from "react";
import { Recipe } from "../interfaces/interfaces";

export const RecipeDetailContext = createContext<{
  recipeDetail: Recipe | undefined;
  setRecipeDetail: Dispatch<SetStateAction<Recipe | undefined>> | undefined;
}>({ recipeDetail: undefined, setRecipeDetail: undefined });
