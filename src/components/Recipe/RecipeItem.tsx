import {  useContext, useEffect } from "react";
import { RecipesContext } from "../../contexts/recipesContext";
import { RecipeDetailContext } from "../../contexts/recipeDetailContext";
import Button from "../Form/Button";
import anime from "animejs";
import { Recipe } from "../../interfaces/interfaces";

export default function RecipeItem({ recipe }: { recipe: Recipe }) {
  const { recipes, setRecipes } = useContext(RecipesContext);
  const { recipeDetail, setRecipeDetail } = useContext(RecipeDetailContext);

  function handleDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    let newRecipes = recipes.filter((r) => r.id != recipe.id);
    newRecipes = newRecipes.sort((a, b) => a.id - b.id);
    let i = 1;
    for (const newRecipe of newRecipes) {
      newRecipe.id = i++;
    }
    setRecipes?.([...newRecipes]);
    if (recipe.id == recipeDetail?.id) {
      setRecipeDetail?.(undefined);
    }
    anime({
      targets: "li",
      scale: [0, 1],
    });
  }

  function handleFocus() {
    setRecipeDetail?.(recipe);
  }

  useEffect(() => {
    anime({
      targets: "li",
      scale: [0, 1],
      delay: anime.stagger(100),
    });
  }, []);


  return (
    <li
      onClick={handleFocus}
      className="flex max-w-[20rem] cursor-pointer flex-col items-start justify-center gap-2 rounded-br-xl rounded-tl-xl bg-palette1 p-4 text-palette2 hover:bg-palette1/80 shadow-3xl"
    >
      <p className="id">Id: {recipe.id}</p>
      <p className="field1">Name: {recipe.name}</p>
      <p className="field2">Ingredients: {recipe.ingredients}</p>
      <p className="field3">Instructions: {recipe.instructions}</p>
      <p className="field4">
        Cooking Time: {recipe.cookingTime}{" "}
        {recipe.cookingTime > 1 ? "hours" : "hour"}
      </p>
      <p className="field5">
        Publication Date: {recipe.publicationDate.toISOString().split("T")[0]}
      </p>
      <Button className="deleteButton" text="Delete" onClick={handleDelete} />
    </li>
  );
}
