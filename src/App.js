import React from 'react';
import WeatherForecast from './components/WeatherForecast';
import Data from './components/data';
import './App.css';

function App() {
    return (
        <div className="App">
            <WeatherForecast />
            <Data />
        </div>
    );
}

export default App;
