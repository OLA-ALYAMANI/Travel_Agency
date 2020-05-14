import React, { Component } from 'react'
import {Button, Card , Row, Container, NavLink} from 'react-bootstrap'
import { Link } from 'react-router-dom'

var sectionStyle = {
    width: "100%",
    height: "650px",

};
export default class About extends Component {
    render() {
        return (
            <div>
                <div>
            <div className="landingb">
              <section style={sectionStyle}>
                <div>
                  <h1>Travel</h1>
                  <h3>We are MOAM Group's provide Travel Agency,
                         connecting tour operators and travel agents to all of the Kingdom's most inspiring experiences.
                         It's our pleasure to guide guests along every step of their journey, from ancient ruins to modern wonders</h3>
                </div>

                <div>
                <Container fluid>
        <Row className="mt-5 mr-3 justify-content-center" style={{ padding: "0" }}>
                <Card className="mr-3" border="dark" style={{ width: '12rem' }}>
    <Card.Body>
      <Card.Title ><h5>Maram Ghilani</h5></Card.Title>
      <Card.Text >
      <h6>Full Stack Web Developer</h6>
      </Card.Text>
      <NavLink
              href="https://www.linkedin.com/in/maram-ghilani/"
              className="btn btn-warning btn-block mb-2"
              variant="outline-warning"
            >
              linkedin
            </NavLink>
    </Card.Body>
  </Card>
  <Card className="mr-3" border="dark" style={{ width: '12rem' }}>
    <Card.Body>
      <Card.Title><h5>Malak Balkhair</h5></Card.Title>
      <Card.Text>
      <h6>Full Stack Web Developer</h6>
      </Card.Text>
      <NavLink
              href="https://www.linkedin.com/in/malak-balkhair/"
              className="btn btn-warning btn-block mb-2"
              variant="outline-warning"
            >
              linkedin
            </NavLink>
    </Card.Body>
  </Card>
  <Card className="mr-3" border="dark" style={{ width: '12rem' }}>
    <Card.Body>
      <Card.Title><h5>Abdulhameed Alghamdi</h5></Card.Title>
      <Card.Text>
      <h6>Full Stack Web Developer</h6>
      </Card.Text>
      <NavLink
              href="https://www.linkedin.com/in/abdulhameed-alghamdi/"
              className="btn btn-warning btn-block mb-2"
              variant="outline-warning"
            >
              linkedin
            </NavLink>
    </Card.Body>
  </Card>
  <Card className="mr-3" border="dark" style={{ width: '12rem' }}>
    <Card.Body>
      <Card.Title><h5>Ola AlYamani</h5></Card.Title>
      <Card.Text>
      <h6>Full Stack Web Developer</h6>
      </Card.Text>
      <NavLink
              as={Link}
              to="/"
              className="btn btn-warning btn-block mb-2"
              variant="outline-warning"
            >
              linkedin
            </NavLink>
    </Card.Body>
  </Card>
  </Row>
  </Container>

                  
                </div>
  
              </section>
            </div>
          </div>
                
            </div>
        )
    }
}