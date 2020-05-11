import React, { Component } from 'react'
import { Col, Card,Row } from "react-bootstrap";
export default class PlaceCard extends Component {
    render() {
        let {image, place, description} = this.props.place
        return (
            <div>
                 place name {place}
                 <Card >

                 <Card.Img
                    style={{ height: 400, width: "100%" }}
                    // variant="top"
                    src={`${image}`}
                    />

                 </Card>
            </div>
        )
    }
}
