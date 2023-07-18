import pizzaSVG from "../assets/pizza.svg";

export default function ErrorPage() {
  return (
    <div className="bg-palette1 text-palette2 min-h-screen">
      <div className="">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img className="h-[10rem] w-[10rem] animate-spin" src={pizzaSVG} />
          <span className="text-6xl font-bold ">
            An Error Occurred, Navigate to some of our Pages
          </span>
        </div>
      </div>
    </div>
  );
}
