import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { RecipesContext, initialRecipes } from "./contexts/recipesContext";
import { useState } from "react";
import { RecipeDetailContext } from "./contexts/recipeDetailContext";

export default function App() {
  const [recipes, setRecipes] = useState<Array<Recipe>>(initialRecipes);
  const [recipeDetail, setRecipeDetail] = useState<Recipe | null>(null);
  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      <RecipeDetailContext.Provider value={{ recipeDetail, setRecipeDetail }}>
        <RouterProvider router={router} />
      </RecipeDetailContext.Provider>
    </RecipesContext.Provider>
  );
}
