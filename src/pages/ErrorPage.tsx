import RecipesList from "../components/RecipesList";
import RecipeDetails from "../components/RecipeDetails";
import recipeWideIMG from "../assets/recipe-wide.jpeg";
import pizzaSVG from "../assets/pizza.svg";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function ErrorPage() {
  return (
    <div className="bg-palette1 text-palette2">
      <Header />
      <div className="relative h-[30rem]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img className="h-[10rem] w-[10rem] animate-bounce" src={pizzaSVG} />
          <span className="text-6xl font-bold ">
            An Error Occurred, Navigate to some of our Pages
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
