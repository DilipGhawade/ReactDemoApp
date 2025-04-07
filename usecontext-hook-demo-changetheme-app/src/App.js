import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";

export function AppContext() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`container mt-5 text-center bg-${theme} text-${
        theme === "light" ? "dark" : "light"
      }`}
    >
      <h2>React Theme Switcher Using Context API</h2>
      <button className="btn btn-primary mt-3" onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContext />
    </ThemeProvider>
  );
}

export default App;
