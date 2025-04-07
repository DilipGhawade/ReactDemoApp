import { useState } from "react";

function useCounter(initialVaule = 0) {
  const [count, setCount] = useState(initialVaule);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(initialVaule);

  return { count, increment, decrement, reset };
}
export default useCounter;
