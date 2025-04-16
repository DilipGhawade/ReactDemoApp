import axios from "axios";
import { toast } from "react-toastify";
import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from "./types";

export const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST,
});

export const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,
});

export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});

// async action fetching the data using api

export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch(fetchWeatherRequest());
    try {
      const response = await axios.get(
        `https://goweather.herokuapp.com/weather/${city}`
      );
      dispatch(fetchWeatherSuccess((await response).data));
      toast.success(`Weather data fetched for ${city}`);
    } catch (error) {
      dispatch(fetchWeatherFailure(error));
      toast.error(`Failed to fetch weather data`);
    }
  };
};
