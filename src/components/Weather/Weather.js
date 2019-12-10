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
                        <input type="text" name="country" placeholder="Enter country" />
                        <input type="text" name="city"
                        placeholder="Enter city" />
                        <span className="button" onClick={() => loadWeather}><button type="submit" value="search">Get Weather</button></span>
                    </div>
                </div>
                <div className="display-weather">
                    <div>
                        { temp ? <span>{ Math.floor(temp) }&deg;</span> : null }
                        { city && country ? <span><h2>{ city }, { country }</h2></span> : null }
                        { temp_min && temp_max 
                            ? <span><h3>{ Math.floor(temp_min) }&deg; - { Math.floor(temp_max) }&deg;</h3></span>
                            : null 
                        }
                        <span><h3>{ description }</h3></span>
                    </div>
                </div>
            </>
        );
}

export default Weather;