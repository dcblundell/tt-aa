import { AppContextProvider } from './hooks/AppContextProvider';
import './styles/style.less'
import WeatherContainer from './components/WeatherContainer';
import CityList from './components/CityList';

function App() {
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

