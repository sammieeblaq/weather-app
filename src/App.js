import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Weather from "./components/Weather/Weather";
import Form from "./components/Form/Form";

const api_key = "e876ad8eedce4610f913d17aaaadae72"



// api.openweathermap.org/data/2.5/weather?q={city name},{country code}
const App = () => {

    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    // const [icon, setIcon] = useState();
    const [description, setDescription] = useState("");
    const [temp_min, setTemp_min] = useState("");
    const [temp_max, setTemp_max] = useState("");
    const [temp, setTemp] = useState("");
    // const [error, setError] = useState(false);


    const getWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        // console.log("got here")
        if (city && country) {
            const api_call = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
            const response = await api_call;
            // console.log(response);
            // return response;
            setCity(response.data.name)
            setCountry(response.data.sys.country);
            setTemp(response.data.main.temp);
            setTemp_max(response.data.main.temp_max);
            setTemp_min(response.data.main.temp_min);
            setDescription(response.data.weather[0].description);
            console.log(response);

        }
    }
    return (
        <div className="App">
            <Weather 
                city = {city} 
                country = {country} 
                temp = {temp} 
                temp_max = {temp_max}
                temp_min = {temp_min}
                description = {description}
            />
            <Form loadWeather={getWeather} />
        </div>
    )
}

export default App;