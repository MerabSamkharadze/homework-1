import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none focus:ring"
    >
      {theme === "light" ? "🌝" : "🌚"}
    </button>
  );
}
