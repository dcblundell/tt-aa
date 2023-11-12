import * as dayjs from 'dayjs'
import './styles.less'
import ForecastProps from '../../types/forecastedDay';
import getWeatherGraphic from '../../functions/getWeatherType';

function ForecastedDay(props: ForecastProps) {
    const { dt, date, main, weather } = props;

    return (
        <div className="forecasted-day" key={dt}>
            <span className="day-label">
                {getFormattedDate(date)}
            </span>

            {getWeatherGraphic(weather[0].main)}

            <span className="temperature">
                {main.temp}&#176;
            </span>
        </div>
    )
}

function getFormattedDate(dateString: Date) {
    return dayjs(dateString).format('ddd');
    // .format('YYYY-MM-DD')
}

export default ForecastedDay
