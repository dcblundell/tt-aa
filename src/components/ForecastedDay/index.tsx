import * as dayjs from 'dayjs'
import './styles.less'
import { ForecastedDayProps } from '../../types/weather';
import getWeatherGraphic from '../../functions/getWeatherType';

function ForecastedDay({ forecast }: ForecastedDayProps) {
    return (
        <div className="forecasted-day" key={forecast.dt}>
            <span className="day-label">
                {getFormattedDate(forecast.date)}
            </span>

            {getWeatherGraphic(forecast.weather[0].main)}

            <span className="temperature">
                {forecast.main.temp}&#176;
            </span>
        </div>
    )
}

function getFormattedDate(dateString: Date) {
    return dayjs(dateString).format('YYYY-MM-DD')
    // .format('ddd')
}

export default ForecastedDay
