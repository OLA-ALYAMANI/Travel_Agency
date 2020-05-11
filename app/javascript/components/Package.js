import React, { Component } from 'react'
import Order from './Order'
import { Route, Switch ,NavLink,Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Button,Row ,Col,Image, Card} from "react-bootstrap";

export default class Package extends Component {

    render() {
        let {id,destination,flight,hotel,plan,price} = this.props.package
        return (
            <div>
                
          <Col md={3} className="m-2">
            <Card >
                <h1> {destination}</h1>
                <h1>{price}</h1>
                <NavLink
              as={Link}
              to={`/orderPackage/${id}`}
              className="btn btn-warning btn-block mb-3"
              variant="outline-warning"
            >
              click buy
            </NavLink>
             
                
           
                
            </Card>
         </Col>
            </div>
        )
    }
}
