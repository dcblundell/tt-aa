import City from "./city";

export default interface AppContextState {
    activeCity?: City;
    setActiveCity?: (city: City) => void,
    weatherData?: string,
    setWeatherData?: (weatherData: string) => void
}
