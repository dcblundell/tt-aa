
import getWeatherGraphic from "../../functions/getWeatherType";
import { useAppContext } from "../../hooks/AppContextProvider"
import ForecastedDay from "../ForecastedDay";
import './styles.less'

const MAX_DAY_FORECAST = 4;
const TODAYS_DATE = new Date();
const END_DATE = new Date();
END_DATE.setDate(END_DATE.getDate() + MAX_DAY_FORECAST);

function WeatherContainer() {
    const { weatherData } = useAppContext();

    const daysForecast = weatherData?.forecast?.list
        .reduce((filteredData, currentDay) => {
            currentDay = {
                ...currentDay,
                date: new Date(currentDay.dt_txt)
            }

            console.log(currentDay.date, END_DATE, currentDay.date < END_DATE)

            if (currentDay.date.getDate() !== TODAYS_DATE.getDate() &&
                currentDay.date < END_DATE &&
                !filteredData?.some(day => day.date.getDate() === currentDay.date.getDate())
            ) {
                filteredData.push(currentDay)
            }

            return filteredData
        }, [])

    console.log(daysForecast)

    return (
        <section className="weather-container">
            <>
              {weatherData.today && (
                <div className="today">
                    <div className="today-title">Today</div>
                    <figure className="weather">
                        {getWeatherGraphic(weatherData.today.description)}
                        <figcaption className="report">
                            <span className="temperature">{weatherData.today.temperature}&#176;</span>
                            <span className="description">{weatherData.today.description}</span>
                        </figcaption>
                    </figure>
                </div>
              )}

              {daysForecast?.length && (
                daysForecast.map(forecast => <ForecastedDay forecast={forecast} key={forecast.dt}/>)
              )}
            </>
        </section>
    )
}

export default WeatherContainer;
