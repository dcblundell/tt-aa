import { AppContextProvider } from './hooks/AppContextProvider';
import './styles/style.less'
import WeatherContainer from './components/WeatherContainer';
import CityList from './components/CityList';


// https://api.openweathermap.org/data/2.5/weather?lat=45.4208777&lon=-75.6901106&appid=d837c83dbd9cf530474384c4f89bdb22
// https://api.openweathermap.org/data/2.5/forecast?lat=45.4208777&lon=-75.6901106&appid=d837c83dbd9cf530474384c4f89bdb22

function App() {
  // ENV vars
  // console.log(import.meta.env)
  return (
    <AppContextProvider>
      <main className="container">
        <CityList />

        <WeatherContainer />
      </main>
    </AppContextProvider>
  )
}

export default App

