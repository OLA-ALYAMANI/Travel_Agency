import React, { Component } from 'react'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Button, Row, Col, Image, Card, CardDeck } from "react-bootstrap";
import { CardText } from 'react-bootstrap/Card';

export default class PackageCard extends Component {
  render() {
    let { id, destination, flight, hotel, plan, price } = this.props.package
    let planDay = plan.split(",")
    let plans = planDay.map(ele => { return `${ele}` })
    return (
      <Col md={4} className="mt-5">
        <Card>
          <Card.Body>
          <h3>Plase:</h3>
          <h5>{destination}</h5>
          <h3>Pice:</h3>
          <h5>{price}</h5>
          {/* <h1>{id}</h1> */}
          <h3>plan:</h3>
          <h5>{planDay.map(ele => <li>{ele}</li>)}</h5>

          <NavLink
            as={Link}
            to={`/orderPackage/${id}`}
            className="btn btn-warning btn-block mb-3"
            variant="outline-warning"
          >
            click buy
            </NavLink>
            </Card.Body>
        </Card>
      </Col>
    )
  }
}
