import City from "../types/cityType";
import EnvType from '../types/envType';
import Forecast, { WeatherBasicDataProps, WeatherDescriptionProps } from "../types/forecastedDayType";

interface currentWeatherResponseType {
    weather: Array<WeatherDescriptionProps>;
    main: WeatherBasicDataProps;
}

interface forecastResponseType {
    list: Array<Forecast>;
}

const { VITE_CURRENT_WEATHER_API, VITE_FORECAST_WEATHER_API, VITE_OPENWEATHERMAP_API_KEY }: EnvType = import.meta.env;

const SEARCH_OPTIONS = {
    units: 'metric'
}

async function getWeatherForCity(
    city: City
) {
    const [ today, forecast ] = await Promise.all([
        getWeatherForToday(city),
        getForecast(city),
    ])

    return {
        today,
        forecast
    }
}

async function getWeatherForToday(city: City) {
    const searchParams = new URLSearchParams({
        lat: city.lat.toString(),
        lon: city.lon.toString(),
        appid: VITE_OPENWEATHERMAP_API_KEY,
        ...SEARCH_OPTIONS,
    });

    const currentWeather = await fetch(`${VITE_CURRENT_WEATHER_API}?${searchParams.toString()}`)
        .then(response => response.json()) as currentWeatherResponseType

    const { weather, main } = currentWeather;

    return {
        temperature: main.temp,
        description: weather[0].main,
    }
}

async function getForecast(city: City) {
    const searchParams = new URLSearchParams({
        lat: city.lat.toString(),
        lon: city.lon.toString(),
        appid: VITE_OPENWEATHERMAP_API_KEY,
        ...SEARCH_OPTIONS,
    });

    const forecast = await fetch(`${VITE_FORECAST_WEATHER_API}?${searchParams.toString()}`)
        .then(response => response.json()) as forecastResponseType

    const { list } = forecast;

    return list
}

export default getWeatherForCity;
