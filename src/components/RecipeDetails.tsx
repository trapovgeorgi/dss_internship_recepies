/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { RecipeDetailContext } from "../contexts/recipeDetailContext";
import { RecipesContext } from "../contexts/recipesContext";
import { useInput } from "../hooks/useInput";
import Input from "./Form/Input";
import Button from "./Form/Button";

export default function RecipeDetails() {
  const { recipeDetail, setRecipeDetail } = useContext(RecipeDetailContext);
  const { recipes, setRecipes } = useContext(RecipesContext);

  useEffect(() => {
    if (recipeDetail) {
      setName(recipeDetail?.name.toString());
      setIngredients(recipeDetail?.ingredients.toString());
      setInstructions(recipeDetail?.instructions.toString());
      setCookingTime(recipeDetail?.cookingTime.toString());
      setPublicationDate(dateToInput(recipeDetail?.publicationDate));
    }
  }, [recipeDetail]);

  function dateToInput(date: Date) {
    return date.toISOString().split("T")[0]
  }

  const [name, setName] = useInput("");
  const [ingredients, setIngredients] = useInput("");
  const [instructions, setInstructions] = useInput("");
  const [cookingTime, setCookingTime] = useInput("");
  const [publicationDate, setPublicationDate] = useInput(dateToInput(new Date()));

  function handleAdd() {
    const newRecipes = recipes.sort((a, b) => a.id - b.id);
    console.log(newRecipes);
    const createdRecipe: Recipe = {
      id: 0,
      name: name.value,
      ingredients: ingredients.value,
      instructions: instructions.value,
      cookingTime: Number(cookingTime.value),
      publicationDate: new Date(publicationDate.value),
    };

    newRecipes.push(createdRecipe);

    let i = 1;
    for (const newRecipe of newRecipes) {
      newRecipe.id = i++;
    }

    setRecipes?.([...newRecipes]);
    setRecipeDetail?.(null);
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <Input label="Name" {...name} />
        <Input label="Ingredients" {...ingredients} />
        <Input label="Instructions" type="text" {...instructions} />
        <Input label="Cooking Time" type="number" {...cookingTime} />
        <Input label="Publication Date" type="date" {...publicationDate} />
        <Button text="Add" onClick={handleAdd} />
      </div>
    </div>
  );
}
