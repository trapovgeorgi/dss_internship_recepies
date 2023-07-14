import RecipesList from "../components/RecipesList";
import RecipeDetails from "../components/RecipeDetails";

export default function HomePage() {
  return (
    <>
      <div className="grid sm:grid-cols-6">
        <div className="bg-red-500 sm:col-span-4">
          <RecipesList />
        </div>
        <div className=" bg-blue-500 sm:col-span-2">
          <div className="sticky top-10">
            <RecipeDetails />
          </div>
        </div>
      </div>
    </>
  );
}
