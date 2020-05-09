import React, { Component } from 'react'
import { Col, Card,Row } from "react-bootstrap";

export default class Places extends Component {
    render() {
        let {image, place, description} = this.props.place

        return (
            <div>
            <Col md={3} className="m-2">
            <Card >
            <Card.Title className={"text-center"} style={{backgroundColor:"green"}}>place name {place}</Card.Title>
            </Card>
            </Col>
            </div>
        )
    }
}
