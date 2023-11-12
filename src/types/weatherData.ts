import TypesOfWeather from "./weather";

interface Forecast {
    dt: number;
    main: {
      temp: number;
    },
    weather: [
      {
        main: TypesOfWeather
      }
    ],
    dt_txt: string,
    date: Date,
  }

interface WeatherData {
    today: {
        temperature: number;
        description: TypesOfWeather;
    },
    forecast: Array<Forecast>
}

export type {
    WeatherData,
    Forecast
}

