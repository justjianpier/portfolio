import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function DarkModeBtn() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle Dark Mode"
      className={`relative flex items-center w-16 h-8 rounded-full transition-all duration-300 p-1 ${
        dark ? "bg-zinc-800" : "bg-zinc-300"
      }`}
    >
      <span
        className={`absolute flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 ${
          dark ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {dark ? (
          <Moon size={14} className="text-zinc-800" />
        ) : (
          <Sun size={14} className="text-yellow-500" />
        )}
      </span>
    </button>
  );
}
