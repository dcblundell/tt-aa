import Forecast from "./forecastedDayType";
import TypesOfWeather from "./weatherTypes";

interface WeatherData {
    today: {
        temperature: number;
        description: TypesOfWeather;
    };
    forecast: Array<Forecast>
}

export type {
    WeatherData,
}

