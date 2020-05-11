import React, { Component } from 'react'
// import { Col, Card,Row } from "react-bootstrap";

export default class Places extends Component {
    render() {
        let {image, place, description} = this.props.place

        return (
            <div>
                place name {place}

   
            </div>
        )
    }
}
