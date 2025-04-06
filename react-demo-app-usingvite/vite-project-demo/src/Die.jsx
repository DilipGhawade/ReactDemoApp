export default function Die({ numside = 6 }) {
  const roll = Math.floor(Math.random() * numside + 1);
  return (
    <>
      <h2>
        {numside} Sided die roll is :- {roll}
      </h2>
    </>
  );
}
