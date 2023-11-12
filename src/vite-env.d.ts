/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CURRENT_WEATHER_API: string;
    readonly VITE_FORECAST_WEATHER_API: string;
    readonly VITE_OPENWEATHERMAP_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
