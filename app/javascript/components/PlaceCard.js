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
                 <Container fluid>
        <Row className="mt-5 justify-content-center" style={{ padding: "0" }}>
        <Card bg="dark" text="light" className="mb-3" >
        <Card.Header  className="justify-content-center" style={{fontSize:25, textAlign:"center"}} >{place}</Card.Header>
          <Card.Img variant="top" src={`${image}`} style={{ width: "50rem", height: "30rem", }} />
          <Card.Body>
            <Card.Text className="justify-content-center" style={{fontSize:20, textAlign:"center"}}>
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
