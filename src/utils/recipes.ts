import { Recipe } from "../interfaces/interfaces";

const NAME_LIST = ["Pizza", "Bread", "Pasta", "Musaka", "Rice With Chicken"];
const INGREDIENTS_LIST = [
  "Tomato",
  "Cheese",
  "Garlic",
  "Potato",
  "Carrot",
  "Pepper",
];
const INSTRUCTIONS_LIST = [
  "Cook, Wait a little, Smell the aroma, Throw in trash",
  "Cook, Wait a little, Step on it, Eat",
  "Cook, Beat with knife, Eat",
];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
function getRandomDate() {
  const year = getRandomArbitrary(2000, 2022);
  const month = getRandomArbitrary(1, 13);
  const day = getRandomArbitrary(1, 31);
  return new Date(year, month, day);
}

function getRandomFrom<T>(arr: Array<T>) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

export function generateRecipe() {
  const name = getRandomFrom(NAME_LIST);
  const ingredientsList = new Set();
  for (let i = 0; i < getRandomArbitrary(1, INGREDIENTS_LIST.length); i++) {
    ingredientsList.add(getRandomFrom(INGREDIENTS_LIST));
  }
  const ingredients = Array.from(ingredientsList).join(", ");
  const instructions = getRandomFrom(INSTRUCTIONS_LIST);
  const cookingTime = getRandomInt(10);
  const publicationDate = getRandomDate();

  const recipe: Recipe = {
    id: 0,
    name,
    ingredients,
    instructions,
    cookingTime,
    publicationDate,
  };

  return recipe;
}

export function generateRecipeList() {
  const recipes = [];
  for (let i = 0; i < getRandomArbitrary(2, 4); i++) {
    recipes.push(generateRecipe());
    recipes[i].id = i + 1;
  }
  return recipes;
}
