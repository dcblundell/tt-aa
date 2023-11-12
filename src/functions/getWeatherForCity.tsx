import currentWeather from '../snapshots/currentWeather.json'
import forecast from '../snapshots/forecast.json'
// import City from "../types/city";

function getWeatherForCity(
    //city: City
) {
    return {
        today: getWeatherForToday(),
        forecast: getForecast(),
    }
}

function getWeatherForToday() {
    const { weather, main } = currentWeather;

    return {
        temperature: main.temp,
        description: weather[0].main,
    }
}

function getForecast() {
    const { list } = forecast;

    return {
        list
    }
}

export default getWeatherForCity;
