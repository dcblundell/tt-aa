import CITIES from "../../definitions/cities"
import CityButton from "../CityButton"
import './styles.less';

function CityList() {
    return (
      <header className="city-list-container">
        <ul className="city-list">
          {CITIES.map(city => (
            <li key={city.formattedName}>
              <CityButton
                city={city}
              />
            </li>
           ))}
        </ul>
      </header>
    )
}

export default CityList
