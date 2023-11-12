import { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
import { DEFAULT_CITY } from '../definitions/cities';
import getWeatherForCity from '../functions/getWeatherForCity';


const AppContext = createContext({
    weatherData: {}
});

// interface AppContextState {
//     activeCity: string;
//     setActiveCity: (city: string) => void,
//     weatherData: string,
//     setWeatherData: (weatherData: string) => void
// }

function AppContextProvider(props: PropsWithChildren) {
    const [ activeCity, setActiveCity ] = useState(DEFAULT_CITY)
    const [ weatherData, setWeatherData ] = useState({})

    useEffect(() => {
        // Temp
        setWeatherData(getWeatherForCity())

        // Language and units are supported by API
        // getWeatherForCity(activeCity)
        // .then(response => response.json())
        // .then(json => setWeatherData(json))
    }, [activeCity])

    const initialState = {
        activeCity,
        setActiveCity,
        weatherData,
        setWeatherData,
    }

    return (
        <AppContext.Provider value={initialState}>
            {props.children}
        </AppContext.Provider>
    );
}

function useAppContext() {
    return useContext(AppContext);
}

export { AppContextProvider, useAppContext }
