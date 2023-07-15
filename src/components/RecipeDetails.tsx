/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { RecipeDetailContext } from "../contexts/recipeDetailContext";
import { RecipesContext } from "../contexts/recipesContext";
import { useInput } from "../hooks/useInput";
import Input from "./Form/Input";
import Button from "./Form/Button";
import { Recipe } from "../interfaces/interfaces";
import { dateToInput } from "../utils/dates";

export default function RecipeDetails() {
  const { recipeDetail, setRecipeDetail } = useContext(RecipeDetailContext);
  const { recipes, setRecipes } = useContext(RecipesContext);

  const [name, setName] = useInput("");
  const [ingredients, setIngredients] = useInput("");
  const [instructions, setInstructions] = useInput("");
  const [cookingTime, setCookingTime] = useInput("");
  const [publicationDate, setPublicationDate] = useInput(
    dateToInput(new Date()),
  );

  useEffect(() => {
    if (recipeDetail) {
      setName(recipeDetail?.name.toString());
      setIngredients(recipeDetail?.ingredients);
      setInstructions(recipeDetail?.instructions);
      setCookingTime(recipeDetail?.cookingTime.toString());
      setPublicationDate(dateToInput(recipeDetail?.publicationDate));
    }
  }, [recipeDetail]);

  function handleAdd() {
    const newRecipes = recipes.sort((a, b) => a.id - b.id);
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
    <div className="content-details flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <Input id={"field1"} label="Name" {...name} />
        <Input id={"field2"} label="Ingredients" {...ingredients} />
        <Input
          id={"field3"}
          label="Instructions"
          type="text"
          {...instructions}
        />
        <Input
          id={"field4"}
          label="Cooking Time"
          type="number"
          {...cookingTime}
        />
        <Input
          id={"field5"}
          label="Publication Date"
          type="date"
          {...publicationDate}
        />
        <Button id="saveButton" text="Save" onClick={handleAdd} />
        <Button id="clearButton" text="Clear" onClick={handleAdd} />
      </div>
    </div>
  );
}
