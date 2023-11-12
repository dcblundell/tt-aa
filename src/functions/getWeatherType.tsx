import { FC } from 'react';
import Clouds from "../components/Icons/Clouds";
import Rain from "../components/Icons/Rain";
import Sun from "../components/Icons/Sun";
import TypesOfWeather from '../types/weather';

const WEATHER_TYPE_GRAPHICS = {
    'Clear': Sun,
    'Clouds': Clouds,
    'Rain': Rain,
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
