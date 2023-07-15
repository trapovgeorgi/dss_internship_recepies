import { useEffect, useState } from "react";

export default function Header() {
  const [transparent, setTransparent] = useState(true);

  function handleScroll() {
    if (document.documentElement.scrollTop > 0) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  }

  useEffect(() => {
    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${transparent ? "bg-palette1/30" : "bg-palette2"} ${
        transparent ? "text-palette2" : "text-palette1"
      } fixed top-0 z-10 flex h-16 w-full items-center justify-between p-4 transition-colors duration-500`}
    >
      <a className="text-3xl font-bold" href="/">
        Recipes
      </a>
      <div className="flex items-center justify-center gap-4">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Recipes</a>
      </div>
    </div>
  );
}
