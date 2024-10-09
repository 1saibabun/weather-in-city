import axios from 'axios';

const API_KEY = '1635890035cbba097fd5c26c8ea672a1';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const getWeatherForecast = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
            },
        });
        return response.data.list.filter((_, index) => index % 8 === 0);
    } catch (error) {
        console.error("Error in the weather data", error);
        throw error;
    }
};

export default getWeatherForecast;
