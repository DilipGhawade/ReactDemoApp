import React from "react";
import useCounter from "./useCounter";

function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="container mt-5 text-center">
      <h2>Custom Hook Counter App</h2>
      <h3 className="my-4">Count: {count}</h3>
      <button className="btn btn-success me-2" onClick={increment}>
        Increment +
      </button>
      <button className="btn btn-danger me-2" onClick={decrement}>
        Decrement -
      </button>
      <button className="btn btn-secondary me-2" onClick={reset}>
        Reset{" "}
      </button>
    </div>
  );
}

export default App;
