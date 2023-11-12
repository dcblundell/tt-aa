import classNames from "classnames";
import { useAppContext } from '../../hooks/AppContextProvider';
import City from "../../types/city";
import './styles.less';

interface CityButtonProps {
    city: City
}

function CityButton({ city }: CityButtonProps) {
    const { activeCity, setActiveCity } = useAppContext();

    function handleCitySelection() {
        setActiveCity(city)
    }

    return (
        <button
            type="button"
            onClick={handleCitySelection}
            className={classNames('city-button', {'isActive': city.id === activeCity.id})}
        >
            {city.formattedName}
        </button>
    )
}

export default CityButton
