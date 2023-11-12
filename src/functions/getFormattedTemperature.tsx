function getFormattedTemperature(temperature: string | number) {
    const parsedString = typeof temperature === 'string' ? parseInt(temperature) : temperature;

    return Math.round(parsedString);
}

export default getFormattedTemperature;
