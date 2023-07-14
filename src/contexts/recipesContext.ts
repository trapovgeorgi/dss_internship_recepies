import { Dispatch, SetStateAction, createContext } from "react";

export const initialRecipes: Array<Recipe> = [
  {
    id: 1,
    name: "KOR",
    ingredients: "KOR",
    instructions: "NONE",
    cookingTime: 5,
    publicationDate: new Date(),
  },
  {
    id: 2,
    name: "KFOR",
    ingredients: "KAAOR",
    instructions: "NOSANE",
    cookingTime: 21,
    publicationDate: new Date(),
  },
  {
    id: 3,
    name: "MOR",
    ingredients: "SoR",
    instructions: "123",
    cookingTime: 44,
    publicationDate: new Date(),
  },
];

export const RecipesContext = createContext<{
  recipes: Array<Recipe>;
  setRecipes: Dispatch<SetStateAction<Recipe[]>> | null;
}>({ recipes: initialRecipes, setRecipes: null });
