import { FC } from 'react';
import Clouds from "../components/Icons/Clouds";
import Rain from "../components/Icons/Rain";
import Sun from "../components/Icons/Sun";
import TypesOfWeather from '../types/weatherTypes';

// @Todo: Replace overuse of Rain here
const WEATHER_TYPE_GRAPHICS = {
    'Thunderstorm': Rain,
    'Clear': Sun,
    'Clouds': Clouds,
    'Drizzle': Rain,
    'Rain': Rain,
    'Atmosphere': Rain,
    'Snow': Rain,
}

interface IconProps {
    className: string
}

function getWeatherGraphic(weatherType: TypesOfWeather) {
    const Icon: FC<IconProps> = WEATHER_TYPE_GRAPHICS[weatherType];

    return (
        <Icon className="graphic" />
    )
}

export default getWeatherGraphic;
