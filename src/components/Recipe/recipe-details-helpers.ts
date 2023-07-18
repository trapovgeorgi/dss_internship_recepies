import { Dispatch, SetStateAction } from "react";
import { Recipe } from "../../interfaces/interfaces";

export function addRecipe(recipes: Recipe[], createdRecipe: Recipe) {
  const newRecipes = recipes.sort((a, b) => a.id - b.id);
  createdRecipe.id = 0;
  newRecipes.push(createdRecipe);
  let i = 1;
  for (const newRecipe of newRecipes) {
    newRecipe.id = i++;
  }
  return [...newRecipes];
}

export function changeRecipe(recipes: Recipe[], createdRecipe: Recipe) {
  const newRecipee = recipes.find((x) => x.id == createdRecipe.id);
  if (newRecipee) {
    Object.assign(newRecipee, createdRecipe);
  }
  return [...recipes];
}

export function checkInputs(
  setError: Dispatch<SetStateAction<string>>,
  name: string,
  ingredients: string,
  instructions: string,
  cookingTime: string,
  publicationDate: string,
) {
  const errors = [];
  if (name.length < 2) {
    errors.push("Name is too short!");
  }
  if (ingredients.length < 2) {
    errors.push("Ingredients are too short!");
  }
  if (instructions.length < 2) {
    errors.push("Instructions are bad!");
  }
  if (cookingTime == "" || Number(cookingTime) < 1) {
    errors.push("Cooking Time is impossibru!");
  }
  if (publicationDate.length < 1) {
    errors.push("Give a proper Date!");
  }
  setError(errors.join(", "))
  
  if (errors.length > 0) return false
  return true;
}
