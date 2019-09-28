import React from "react";
import cardImage from "../../assets/images/marc-babin.jpg";

const eventsCard = props => (
    <div className="card" style={{width: "18rem"}}>
        <img src={cardImage} className="card-img-top" alt="..." style={{ height: "12rem" }} />
        <div className="card-body">
            <h5 className="card-title">Google Meetup</h5>
            <p>This is s simple Event Card</p>
            <a href="/" className="btn btn-secondary">Book</a>
        </div>
    </div>
)

export default eventsCard;