import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Toolbar = () => {
  const themeContet = useContext(ThemeContext);
  const { theme, toggleTheme } = themeContet;
  return (
    <div>
      <h2>Toolbar</h2>
      <button style={{ backgroundColor: theme }} onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default Toolbar;
