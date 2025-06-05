"use client";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-800 dark:text-gray-100"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
