import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "./action";

function WeatherForm() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim !== "") {
      dispatch(fetchWeather(city));
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Get Weather
      </button>
    </form>
  );
}

export default WeatherForm;
