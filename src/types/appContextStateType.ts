import City from "./cityType";
import { WeatherData } from "./weatherDataType";

export default interface AppContextState {
    activeCity?: City;
    setActiveCity?: (city: City) => void;
    weatherData?: WeatherData;
    setWeatherData?: (weatherData: WeatherData) => void;
}
