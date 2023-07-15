import { useContext} from "react";
import RecipeItem from "./RecipeItem";
import { RecipesContext } from "../contexts/recipesContext";

export default function RecipesList() {
  const { recipes } = useContext(RecipesContext);
  return (
    <div className="content-list">
      <ul className="flex justify-center items-center gap-8 flex-wrap">
        {recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)}
      </ul>
      {recipes.length <= 0 && <span className="text-xl font-bold">No Recipes, Add some...</span>}
    </div>
  );
}
