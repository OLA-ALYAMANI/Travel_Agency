import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Tlogo.PNG"
import { Navbar, Nav, Button, Form, NavItem } from 'react-bootstrap'

export default class Navb extends Component {
//     render() {
//         return (
//             <div>
//                 <Navbar bg="warning" >
//                     <Navbar.Brand as={Link} to="/Home">
//                      <img
//                             alt=""
//                             src={Logo}
//                             width="38px"
//                             height="38px"
//                             className="d-inline-block align-top"
//                         />
//                     </Navbar.Brand>
//                     <Navbar.Brand as={Link} to="/Home" >Travel</Navbar.Brand>
//                     {'  '}
//                     {'  '}
//                     <Nav className="mr-auto">
//                         <Nav.Link as={Link} to="/Home">Home</Nav.Link>
//                         <Nav.Link as={Link} to="/About">About</Nav.Link>
//                         {/* <Nav.Link as={Link} to="/city">city</Nav.Link> */}


//                     </Nav>
//                     <Nav>

//                     <Button as={Link} to="/Signin" variant="outline-light" >  Sign In  </Button>

//                     <Button as={Link} to="/Signup" variant="outline-light" className="ml-2"> Sign Up</Button> 

//                     <Button as={Link} to="/shoppingCart" variant="outline-light" className="ml-3">  Shopping Cart </Button>
// import Logo from "./Tlogo.PNG";
// import { Navbar, Nav, Button, Form } from "react-bootstrap";
// export default class Navb extends Component {

  render() {
    console.log(localStorage.token);
    return (
      <div>
        <Navbar bg="warning">
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={Logo}
              width="38px"
              height="38px"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand> Travel</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/city">city</Nav.Link> */}
          </Nav>
          <Nav>
            {localStorage.token ? (
              <Button variant="outline-light" onClick={this.props.logout}>
                {" "}
                logout{" "}
              </Button>
            ) : (
              <Nav>
                <Button as={Link} to="/Signin" variant="outline-light">
                  {" "}
                  Sign In{" "}
                </Button>
                <Button
                  as={Link}
                  to="/Signup"
                  variant="outline-light"
                  className="ml-2"
                >
                  {" "}
                  Sign Up
                </Button>
              </Nav>
            )}
            <Button
              as={Link}
              to="/shoppingCart"
              variant="outline-light"
              className="ml-3"
            >
              {" "}
              Shopping Card{" "}
            </Button>
          </Nav>
        </Navbar>
      </div>
    );
  }

}
