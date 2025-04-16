import React from "react";
import { useSelector } from "react-redux";

function Weather() {
  const { loading, weather, error } = useSelector((state) => state);

  return (
    <div>
      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {error && <p className="text-danger">{error}</p>}
      {weather.temperature && (
        <div className="card p-3 mt-3">
          <h3>Weatther Report </h3>
          <p>
            <strong>Tempreture: </strong>
            {weather.temperature}
          </p>
          <p>
            <strong>Wind: </strong>
            {weather.wind}
          </p>
          <p>
            <strong>Discription: </strong>
            {weather.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;
