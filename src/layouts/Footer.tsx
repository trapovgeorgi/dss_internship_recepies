export default function Footer() {
  return (
    <div>
      <div className="bg-palette2 text-accent grid gap-4 py-8 max-md:grid-rows-3 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-extrabold">Recipes</p>
          <div className="flex flex-col items-center justify-center">
            <a href="" className="">
              поверителност
            </a>
            <a href="" className="">
              контакти
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-4xl font-bold">Recipes</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-3xl font-extrabold">Свържете се с нас</p>
          <div className="flex flex-row gap-4">
            <div className="bg-palette1 h-10 w-10 rounded-full"></div>
            <div className="bg-palette1 h-10 w-10 rounded-full"></div>
            <div className="bg-palette1 h-10 w-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
