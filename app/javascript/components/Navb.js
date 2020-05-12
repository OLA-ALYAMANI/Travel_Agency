import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Logo from "./Tlogo.PNG"
import { Navbar, Nav, Button, Form } from 'react-bootstrap'

export default class Navb extends Component {
    render() {
        return (
            <div>
                <Navbar bg="warning" >
                    <Navbar.Brand href="#">
                     <img
                            alt=""
                            src={Logo}
                            width="38px"
                            height="38px"
                            className="d-inline-block align-top"
                        />{' '}
                    Travel
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Card">Card</Nav.Link>
                        <Nav.Link as={Link} to="/About">About</Nav.Link>
                        {/* <Nav.Link as={Link} to="/city">city</Nav.Link> */}


                    </Nav>
                    <Nav>

                    <Button as={Link} to="/Signin" variant="outline-light" >  Sign In  </Button>
                    <Button as={Link} to="/Signup" variant="outline-light" className="ml-2"> Sign Up</Button>
                     

                    <Button as={Link} to="/shoppingCard" variant="outline-light" className="ml-3">  Shopping Card </Button>


                    </Nav>
                </Navbar>
            </div>
        )
    }
}
