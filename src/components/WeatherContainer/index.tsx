
import getFormattedTemperature from "../../functions/getFormattedTemperature";
import getWeatherGraphic from "../../functions/getWeatherType";
import { useAppContext } from "../../hooks/AppContextProvider"
import forecastedDayType from "../../types/forecastedDayType";
import ForecastedDay from "../ForecastedDay";
import './styles.less'

const MAX_DAY_FORECAST = 4;
const TODAYS_DATE = new Date();
const END_DATE = new Date();
END_DATE.setDate(END_DATE.getDate() + MAX_DAY_FORECAST);

function WeatherContainer() {
    const { weatherData } = useAppContext();

    // VERY basic loading state
    if (!weatherData?.forecast) {
        return 'Loading';
    }

    const daysForecast: Array<forecastedDayType> = weatherData.forecast.reduce((filteredData: Array<forecastedDayType>, currentDay: forecastedDayType) => {
        currentDay = {
            ...currentDay,
            date: new Date(currentDay.dt_txt)
        }

        if (currentDay.date.getDate() !== TODAYS_DATE.getDate() &&
            currentDay.date < END_DATE &&
            !filteredData.some(day => day.date.getDate() === currentDay.date.getDate())
        ) {
            filteredData.push(currentDay)
        }

        return filteredData
    }, []);

    return (
        <section className="weather-container">
            <>
            <div className="today">
                <div className="today-title">Today</div>
                <figure className="weather">
                    {getWeatherGraphic(weatherData.today.description)}
                    <figcaption className="report">
                        <span className="temperature">{getFormattedTemperature(weatherData.today.temperature)}&#176;</span>
                        <span className="description">{weatherData.today.description}</span>
                    </figcaption>
                </figure>
            </div>

              {daysForecast.length && (
                daysForecast.map(day => <ForecastedDay {...day} key={day.dt}/>)
              )}
            </>
        </section>
    )
}

export default WeatherContainer;
