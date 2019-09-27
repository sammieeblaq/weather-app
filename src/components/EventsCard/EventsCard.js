import React from "react";
import { Card, Button } from "react-bootstrap";

const eventsCard = props => (
    <div>
        <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={"../../public/images/elon-musk.jpg"} alt="Card Image" />
            <Card.Body>
                <Card.Title>Wizkid Concert</Card.Title>
                <Card.Text>
                    A simple description of the particular event occuring.
                </Card.Text>
                <Card.Text>
                    27th September, 2019
                </Card.Text>
                <Button variant="secondary">Book Event</Button>
            </Card.Body>
        </Card>
    </div>
)

export default eventsCard;