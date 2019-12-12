import React from "react";
import "./Form.css";

const Form = ({ loadWeather }) => (
    <>
        <form className="box" onSubmit={loadWeather}>
            <input type="text" name="city" placeholder="Enter city"/>
            <input type="text" name="country" placeholder="Enter country" />
            <span className="button"><button type="submit" value="search">Get Weather</button></span>
        </form>
    </>
)

export default Form;