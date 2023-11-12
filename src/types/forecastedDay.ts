import TypesOfWeather from "./weather";

interface WeatherDescriptionProps {
    main: TypesOfWeather
}

interface WeatherBasicDataProps {
    temp: string
}

interface ForecastProps {
    dt: number;
    date: Date;
    weather: Array<WeatherDescriptionProps>;
    main: WeatherBasicDataProps
}

export default ForecastProps
