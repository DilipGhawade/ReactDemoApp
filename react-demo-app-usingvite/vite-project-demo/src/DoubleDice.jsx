function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  return (
    <div>
      <h2>Double Dice Game</h2>
      {/* This is the best pratice */}
      {num1 === num2 ? <h3>You Win !!!</h3> : null}
      <p>Num1: {num1}</p>
      <p>Num2: {num2}</p>
    </div>
  );
}

// function DoubleDice() {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;
//   const result = num1 === num2 ? "You Win!!" : "You Loose:(";
//   return (
//     <div>
//       <h1>{result}</h1>
//       <p>Num1: {num1}</p>
//       <p>Num2: {num2}</p>
//     </div>
//   );
// }

export default DoubleDice;
