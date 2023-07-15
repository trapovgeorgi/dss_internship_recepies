import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { RecipesContext } from "./contexts/recipesContext";
import { useState } from "react";
import { RecipeDetailContext } from "./contexts/recipeDetailContext";
import { generateRecipeList } from "./utils/recipes";
import { Recipe } from "./interfaces/interfaces";

export default function App() {
  const [recipes, setRecipes] = useState<Array<Recipe>>(generateRecipeList());
  const [recipeDetail, setRecipeDetail] = useState<Recipe | null>(null);
  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      <RecipeDetailContext.Provider value={{ recipeDetail, setRecipeDetail }}>
        <RouterProvider router={router} />
      </RecipeDetailContext.Provider>
    </RecipesContext.Provider>
  );
}
