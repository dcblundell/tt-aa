import TypesOfWeather from "./weatherTypes";

interface WeatherDescriptionProps {
    main: TypesOfWeather
}

interface WeatherBasicDataProps {
    temp: string
}

interface Forecast {
    dt: number;
    dt_txt: string;
    date: Date;
    weather: Array<WeatherDescriptionProps>;
    main: WeatherBasicDataProps;
}

export default Forecast
export type {
    WeatherDescriptionProps,
    WeatherBasicDataProps
}
