interface WeatherDescriptionProps {
    main: string
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

interface ForecastedDayProps {
    forecast: ForecastProps
}

export type {
    WeatherDescriptionProps,
    WeatherBasicDataProps,
    ForecastProps,
    ForecastedDayProps
}
