import City from "./city";
import { WeatherData } from "./weatherData";

export default interface AppContextState {
    activeCity?: City;
    setActiveCity?: (city: City) => void,
    weatherData?: WeatherData,
    setWeatherData?: (weatherData: WeatherData) => void
}
