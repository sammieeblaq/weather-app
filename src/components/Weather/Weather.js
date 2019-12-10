import React from "react";
import "./Weather.css";



const Weather = 
    ({ 
        city, 
        country,
        temp,
        temp_max,
        temp_min,
        description,
        loadWeather
    }) => {
        return (
            <>
                <div className="box">
                    <div>
                        <input type="text" placeholder="Enter country" />
                        <input type="text" placeholder="Enter city" />
                        <span className="button" onClick={loadWeather}><button type="submit" value="search">Get Weather</button></span>
                    </div>
                </div>
                <div className="display-weather">
                    <div>
                        <span>{ Math.floor(temp) }&deg;</span>
                        <span><h2>{ city }, { country }</h2></span>
                        <span><h3>{ Math.floor(temp_min) }&deg; - { Math.floor(temp_max) }&deg;</h3></span>
                        <span><h3>{ description }</h3></span>
                    </div>
                </div>
            </>
        );
}

export default Weather;