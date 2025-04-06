import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeter from "./Greeter";
import Die from "./Die";
import DoubleDice from "./DoubleDice";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Greeter person="Dilip" from="Pune Maharashtra" /> */}
      {/* <Greeter from="Pune Maharashtra" />
      <Die numside={4} />
      <Die />
      <Die numside={20} /> */}
      <DoubleDice />
    </>
  );
}

export default App;
