import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Img,
    Card,
  } from "react-bootstrap";
export default class PlaceCard extends Component {
    render() {
        let {image, place, description} = this.props.place
        return (
            <div>
                 <Container className="mb-5" fluid>
        <Row  className="mt-5 justify-content-center" style={{ padding: "0" }}>
        <Card border="warning" bg="dark" text="light" className="mb-3" style={{ width: "50rem"}} >
        <Card.Header  className="justify-content-center" style={{fontSize:25, textAlign:"center"}} >{place}</Card.Header>
          <Card.Img variant="top" src={`${image}`} style={{ width: "50rem", height: "30rem", }} />
          <Card.Body>
            <Card.Text style={{fontSize:15}}>
            {description}{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        </Row>
        </Container>
                 {/* <Card >

                 <Card.Img
                    style={{ height: 400, width: "100%" }}
                    // variant="top"
                    src={`${image}`}
                    />

                 </Card> */}
            </div>
        )
    }
}
