import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EventCard from "../../components/EventsCard/EventsCard";

const homePage = props => (
    <div>
        <Header />
        <EventCard />
        <Footer />
    </div>
)

export default homePage;