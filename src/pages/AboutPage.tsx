import pizzaSVG from "../assets/pizza.svg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-palette1 text-palette2">
      <div className="">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            className="m-auto h-[10rem] w-[10rem] animate-pulse"
            src={pizzaSVG}
          />
          <span className="text-6xl font-bold ">About us</span>
          <p>Some info about us...</p>
        </div>
      </div>
    </div>
  );
}
