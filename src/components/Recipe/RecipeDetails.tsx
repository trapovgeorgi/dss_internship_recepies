/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { RecipeDetailContext } from "../../contexts/recipeDetailContext";
import { RecipesContext } from "../../contexts/recipesContext";
import { useInput } from "../../hooks/useInput";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { Recipe } from "../../interfaces/interfaces";
import { dateToInput } from "../../utils/dates";
import { addRecipe, changeRecipe, checkInputs } from "./recipe-details-helpers";

export default function RecipeDetails() {
  const { recipeDetail, setRecipeDetail } = useContext(RecipeDetailContext);
  const { recipes, setRecipes } = useContext(RecipesContext);

  const [error, setError] = useInput("");

  const [id, setId] = useInput(0);
  const [name, setName] = useInput("");
  const [ingredients, setIngredients] = useInput("");
  const [instructions, setInstructions] = useInput("");
  const [cookingTime, setCookingTime] = useInput("");
  const [publicationDate, setPublicationDate] = useInput("");

  useEffect(() => {
    if (recipeDetail) {
      setId(recipeDetail?.id);
      setName(recipeDetail?.name.toString());
      setIngredients(recipeDetail?.ingredients);
      setInstructions(recipeDetail?.instructions);
      setCookingTime(recipeDetail?.cookingTime.toString());
      setPublicationDate(dateToInput(recipeDetail?.publicationDate));
    } else {
      clearInputs();
    }
  }, [recipeDetail]);

  useEffect(() => {
    console.log(recipeDetail);
  }, [recipeDetail]);

  function handleSave(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const isOkInputs = checkInputs(
      setError,
      name.value,
      ingredients.value,
      instructions.value,
      cookingTime.value,
      publicationDate.value,
    );
    if (!isOkInputs) return;

    let newRecipes = [...recipes];
    const createdRecipe: Recipe = {
      id: id.value,
      name: name.value,
      ingredients: ingredients.value,
      instructions: instructions.value,
      cookingTime: Number(cookingTime.value),
      publicationDate: new Date(publicationDate.value),
    };
    if (id.value != 0) {
      newRecipes = changeRecipe(newRecipes, createdRecipe);
    } else {
      newRecipes = addRecipe(newRecipes, createdRecipe);
    }
    setRecipes?.(newRecipes);
    setRecipeDetail?.(undefined);
  }

  function clearInputs() {
    setId(0);
    setName("");
    setIngredients("");
    setInstructions("");
    setCookingTime("");
    setPublicationDate("");
    setRecipeDetail?.(undefined);
  }
  function handleClear(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    clearInputs();
  }

  return (
    <div className="content-details flex items-center justify-center">
      <form className="flex flex-col gap-4 w-[10rem]">
        <p className="text-red-500 break-normal">{error.value}</p>
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
        <Button id="saveButton" text="Save" onClick={handleSave} />
        <Button id="clearButton" text="Clear" onClick={handleClear} />
      </form>
    </div>
  );
}
