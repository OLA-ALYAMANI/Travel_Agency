import React, { Component } from 'react'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Button, Row, Col, Image, Card, CardDeck } from "react-bootstrap";
import { CardText } from 'react-bootstrap/Card';

export default class PackageCard extends Component {
  render() {
    let { id, destination, flight, hotel, plan, price , image, } = this.props.package
    let planDay = plan.split(",")
    let plans = planDay.map(ele => { return `${ele}` })
    return (

      
      <Col md={4} className="mt-5 justify-content-center">
        <Card >
          <Card.Body>
          <Card.Title className={"text-center"} style={{fontSize: 30 ,backgroundColor: "rgb(255, 204, 0, 0.5)" }}>{destination.toUpperCase()}</Card.Title>
          <Card.Text><h4>The Wonderful Plan</h4></Card.Text>
          <Card.Text><h5 >{planDay.map(ele => <li>{ele}</li>)}</h5></Card.Text>
          <Card.Text><h4>Package Cost</h4></Card.Text>
          <Card.Text><h5>{price} RS</h5></Card.Text>
          {/* <h1>{id}</h1> */}

          <NavLink
            as={Link}
            to={`/orderPackage/${id}`}
            className="btn btn-warning btn-block mb-3"
            variant="outline-warning"
          >
            Book a Package
            </NavLink>
            </Card.Body>
        </Card>
      </Col>
    )
  }
}
