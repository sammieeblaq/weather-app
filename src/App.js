import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Weather from "./components/Weather/Weather";

const api_key = "e876ad8eedce4610f913d17aaaadae72"

// api.openweathermap.org/data/2.5/weather?q={city name},{country code}
const App = () => {

    // const [weather, setWeather] = useState();

    const getWeather = async () => {
        const api_call = await axios.get(`// api.openweathermap.org/data/2.5/weather?q={London},{uk}&appid=${api_key}`);
        // const response = await api_call.
    }
    
    return (
        <div className="App">
            <Weather />
        </div>
    )
}

export default App;