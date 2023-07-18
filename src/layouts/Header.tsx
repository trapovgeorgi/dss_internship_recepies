import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <Link className="text-3xl font-bold" to="/">
        Recipes
      </Link>
      <div className="flex items-center justify-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/error">Error</Link>
      </div>
    </div>
  );
}
