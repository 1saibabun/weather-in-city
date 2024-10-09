import React, { useState } from 'react';
import { mockWeatherData } from '../mockWeatherData';
import './WeatherForecast.css';

const WeatherForecast = () => {
    const [city, setCity] = useState('');
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searched, setSearched] = useState(false);

    const fetchWeather = () => {
        setLoading(true);
        setError('');
        setSearched(true);

        setTimeout(() => {
            const mockCity = mockWeatherData.city.toLowerCase();
            const userInput = city.toLowerCase();

            if (mockCity.includes(userInput)) {
                setForecast(mockWeatherData.forecast);
                setError('');
            } else {
                setForecast([]);
                setError('City not found. Please try again.');
            }
            setLoading(false);
        }, 1000);
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setCity(inputValue);

        if (inputValue === '') {
            setForecast([]);
            setSearched(false);
            setError('');
        }
    };

    return (
        <div className="weather-container">
            <h1>Weather in your city</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={city}
                    onChange={handleInputChange}
                    placeholder="Enter city name"
                />
                <button 
                    onClick={fetchWeather} 
                    disabled={city === ''}
                >
                    Search
                </button>
                {loading && <div className="loader"></div>}
            </div>

            {error && <p className="error">{error}</p>} 

            <div className="forecast">
                {!loading && searched && forecast.length === 0 && !error && (
                    <p>No data available</p>  
                )}
                {!loading && forecast.length > 0 && (
                    forecast.map((day, index) => (
                        <div key={index} className="forecast-day">
                            <h3>Date: {new Date(day.date).toLocaleDateString()}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan="2">Temperature</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Min</td>
                                        <td>Max</td>
                                    </tr>
                                    <tr>
                                        <td>{day.main.temp_min.toFixed(2)}°C</td>
                                        <td>{day.main.temp_max.toFixed(2)}°C</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">Pressure: {day.main.pressure} hPa</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">Humidity: {day.main.humidity}%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default WeatherForecast;
