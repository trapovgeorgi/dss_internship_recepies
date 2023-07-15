import { useContext, useEffect } from "react";
import { RecipesContext } from "../contexts/recipesContext";
import { RecipeDetailContext } from "../contexts/recipeDetailContext";
import Button from "./Form/Button";
import anime from "animejs";
import { Recipe } from "../interfaces/interfaces";

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
    anime({
      targets: "li",
      scale: [0, 1],
    })
  }

  function handleFocus() {
    setRecipeDetail?.(recipe);
  }

  useEffect(() => {
    anime({
      targets: "li",
      scale: [0, 1],
      delay: anime.stagger(100)
    })
  }, [])
  
  return (
    <li onClick={handleFocus} className="flex w-[20rem] flex-col items-start justify-center bg-palette1 text-palette2 p-4 gap-2 rounded-tl-xl rounded-br-xl hover:bg-palette1/80 cursor-pointer">
      <p className="id">Id: {recipe.id}</p>
      <p className="field1">Name: {recipe.name}</p>
      <p className="field2">Ingredients: {recipe.ingredients}</p>
      <p className="field3">Instructions: {recipe.instructions}</p>
      <p className="field4">Cooking Time: {recipe.cookingTime}</p>
      <p className="field5">Publication Date: {recipe.publicationDate.toISOString().split("T")[0]}</p>
      <Button className="deleteButton" text="Delete" onClick={handleDelete}/>
    </li>
  );
}
