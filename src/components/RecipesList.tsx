import { useContext} from "react";
import RecipeItem from "./RecipeItem";
import { RecipesContext } from "../contexts/recipesContext";

export default function RecipesList() {
  const { recipes } = useContext(RecipesContext);
  return (
    <div className="content-list">
      <ul>
        {recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)}
      </ul>
    </div>
  );
}
