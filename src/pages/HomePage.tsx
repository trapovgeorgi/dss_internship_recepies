import RecipesList from "../components/RecipesList";
import RecipeDetails from "../components/RecipeDetails";
import recipeWideIMG from "../assets/recipe-wide.jpeg";
import pizzaSVG from "../assets/pizza.svg";

export default function HomePage() {
  return (
    <div>
      <div className="h-[30rem] relative">
        <div className="absolute h-[10rem] w-[10rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img className="animate-bounce" src={pizzaSVG}/>
        </div>
        <img className="object-cover h-full w-full" src={recipeWideIMG} />
      </div>
      <div className="grid sm:grid-cols-6">
        <div className="flex items-center justify-center bg-palette2 text-palette1 py-8 sm:col-span-4">
          <RecipesList />
        </div>
        <div className="flex items-start justify-center bg-palette1 text-palette2 py-8 sm:col-span-2">
          <div className="sticky top-16">
            <RecipeDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
