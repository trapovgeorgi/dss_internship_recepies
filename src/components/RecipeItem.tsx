import { useContext } from "react";
import { RecipesContext } from "../contexts/recipesContext";
import { RecipeDetailContext } from "../contexts/recipeDetailContext";
import Button from "./Form/Button";

export default function RecipeItem({ recipe }: { recipe: Recipe }) {
  const { recipes, setRecipes } = useContext(RecipesContext);
  const { setRecipeDetail } = useContext(RecipeDetailContext);

  function handleDelete() {
    let newRecipes = recipes.filter((r) => r.id != recipe.id);
    newRecipes = newRecipes.sort((a, b) => a.id - b.id);
    let i = 1;
    for (const newRecipe of newRecipes) {
      newRecipe.id = i++;
    }
    setRecipes?.([...newRecipes]);
  }

  function handleFocus() {
    setRecipeDetail?.(recipe);
  }

  return (
    <li onClick={handleFocus} className="flex w-[10rem] flex-col items-start justify-center bg-orange-400 p-4">
      <p className="id">{recipe.id}</p>
      <p className="field1">{recipe.name}</p>
      <p className="field2">{recipe.ingredients}</p>
      <p className="field3">{recipe.instructions}</p>
      <p className="field4">{recipe.cookingTime}</p>
      <p className="field5">{recipe.publicationDate.toLocaleString()}</p>
      <Button text="Delete" onClick={handleDelete}/>
    </li>
  );
}
