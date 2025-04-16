import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="container text-center mt-5">
      <h2>Redux Counter APP</h2>
      <h3 className="my-4">Count: {count} </h3>
      <button
        className="btn btn-success me-2"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        INCREMENT
      </button>
      <button
        className="btn btn-danger me-2"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        DECREMENT
      </button>
      <button
        className="btn btn-secondary me-2"
        onClick={() => dispatch({ type: "RESET" })}
      >
        RESET
      </button>
    </div>
  );
}

export default App;
