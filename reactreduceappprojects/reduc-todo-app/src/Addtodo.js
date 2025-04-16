import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Addtodo() {
  const [todo, setTodo] = useState("");
  const dispatach = useDispatch();
  const todos = useSelector((state) => state.todo);
  const handleAdd = () => {
    if (todo.trim === "") return;
    dispatach({
      type: "ADD_TODO",
      payload: todo,
    });
    setTodo("");
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Redux Todo App</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter Todo iten"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="btn btn-primary mb-3" onClick={handleAdd}>
        Add Todo
      </button>
      <ul className="list-group">
        {todos.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Addtodo;
