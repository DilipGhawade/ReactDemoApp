import React from "react";
import ThemeContext from "./ThemeContext";
import Toolbar from "./Toolbar";
import ThemeProvider from "./ThemeProvider";

function App() {
  return (
    <div className="container mt-5">
      <h2>Context Demo</h2>
      <ThemeProvider>
        <Toolbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
