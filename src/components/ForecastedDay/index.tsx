import * as dayjs from 'dayjs'
import './styles.less'
import ForecastProps from '../../types/forecastedDayType';
import getWeatherGraphic from '../../functions/getWeatherType';
import getFormattedTemperature from '../../functions/getFormattedTemperature';

function ForecastedDay({ dt, date, main, weather }: ForecastProps) {
    return (
        <div className="forecasted-day" key={dt}>
            <span className="day-label">
                {getFormattedDate(date)}
            </span>

            {getWeatherGraphic(weather[0].main)}

            <span className="temperature">
                {getFormattedTemperature(main.temp)}&#176;
            </span>
        </div>
    )
}

function getFormattedDate(dateString: Date) {
    return dayjs(dateString).format('ddd');
}

export default ForecastedDay
