function Greeter({ person = "Every One", from }) {
  return (
    <>
      <h1>Hello {person}, Welcome</h1>
      <h2>From - {from}</h2>
    </>
  );
}
export default Greeter;
