import Clouds from "../components/Icons/Clouds";
import Rain from "../components/Icons/Rain";
import Sun from "../components/Icons/Sun";
import { TypesOfWeather } from "../types/weather";

const WEATHER_TYPE_GRAPHICS = {
    'Clear': Sun,
    'Clouds': Clouds,
    'Rain': Rain,
}

function getWeatherGraphic(weatherType: TypesOfWeather) {
    const Icon = WEATHER_TYPE_GRAPHICS[weatherType];

    return (
        <Icon className="graphic" />
    )
}

export default getWeatherGraphic;
