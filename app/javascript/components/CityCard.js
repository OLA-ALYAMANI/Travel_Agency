import React, { Component } from "react";
import Places from "./Places";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Link } from "react-router-dom";
import {
  Form,
  Container,
  Button,
  Row,
  Col,
  Img,
  Card,
} from "react-bootstrap";


export default class CityCard extends Component {
  render() {
    let {
      id,
      image,
      city_name,
      city_about,
      lat,
      lng,
      living_cost,
      best_time_visit,
    } = this.props.city;

    return (
      <div>
        <Container fluid>
        <Row className="mt-5 justify-content-center" style={{ padding: "0" }}>
        <Card  className="mr-5" style={{ width: "20rem" }} >
          <Card.Img variant="top" src={`${image}`} style={{ width: "20rem", height: "13rem", }} />
          <Card.Body>
            <Card.Title className={"text-center"} className={"text-center"} style={{fontSize: 50 ,backgroundColor: "rgb(244, 244, 244)" }} >{city_name}{" "}</Card.Title>
            <Card.Text>
            {city_about}{" "}
            </Card.Text>
            <NavLink
              as={Link}
              to={`/places/${id}`}
              className="btn btn-warning btn-block mb-3"
              variant="outline-warning"
            >
              See Famous Places In City
            </NavLink>
          </Card.Body>
        </Card>
        </Row>
        </Container>
        
        {/* ======= */}
        {/* <Container className="mt-5" fluid>
          <Row className="mt-5 justify-content-center" style={{ padding: "0" }}>
            <Card.Title
              className={"text-center"}
              style={{ backgroundColor: "rgb(244, 244, 244)" }}
            >
              {" "}
              city name :{city_name}{" "}
            </Card.Title>

            <NavLink
              as={Link}
              to={`/places/${id}`}
              className="btn btn-warning btn-block mb-3"
              variant="outline-warning"
            >
              See Famous Places In City
            </NavLink>
          </Row>
        </Container> */}
      </div>
    );
  }
}
