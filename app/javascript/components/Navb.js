import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import Logo from './Tlogo.png'
import { Navbar, Nav, Button, Form } from 'react-bootstrap'

export default class Navb extends Component {
    render() {
        return (
            <div>
                <Navbar bg="warning" >
                    <Navbar.Brand href="#">
                    Travel
                        {/* <img
                            alt=""
                            src={Logo}
                            width="40px"
                            height="40px"
                            style={divStyle}
                            className="d-inline-block align-top"
                        />{' '} */}
                    </Navbar.Brand>
                    <Nav className="mr-auto" bg="light" >
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>

                        <Nav.Link as={Link} to="/About">About</Nav.Link>
                        {/* <Nav.Link as={Link} to="/city">city</Nav.Link> */}


                    </Nav>
                    <Nav>
                    <Button as={Link} to="/shoppingCard" variant="outline-light" >  Shopping Card </Button>

                    <Button as={Link} to="/signin" variant="outline-light" >  Sign In  </Button>
                    <Button as={Link} to="/signup" variant="outline-light" className="ml-3"> Sign Up</Button> 
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
