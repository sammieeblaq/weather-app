import React from "react";
import "./Weather.css";

const Weather = () => (
    <>
        <div className="box">
            <div>
                <input type="text" placeholder="Enter country" />
                <input type="text" placeholder="Enter city" />
                <span class="button"><button type="submit" value="search">Get Weather</button></span>
            </div>
        </div>
        <div className="display-weather">
            <h1>25&deg;</h1>
        </div>
    </>
)

export default Weather;