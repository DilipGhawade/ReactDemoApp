import logo from "./logo.svg";
import "./App.css";
import WeatherForm from "./WeatherForm";
import Weather from "./Weather";

function App() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Weather App</h2>
      <WeatherForm />
      <Weather />
    </div>
  );
}

export default App;
