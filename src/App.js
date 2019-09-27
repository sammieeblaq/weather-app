import React, { Component } from "react";
import Button from "./components/Buttons/Buttons";

// import AppRouter from "./router/AppRouter";
import EventCard from "./components/EventsCard/EventsCard";


class App extends Component {

	render() {
		return (
			<div>
				{/* <AppRouter /> */}
				<Button />
				<EventCard />
			</div>
		)
	}
}

export default App;