import React, { Component } from 'react'
import axios from 'axios'
import { passCsrfToken } from '../util/helpers'
import Nav from './Navb'
import City from './City'
import Places from './Places'
import Package from './Package'
import {NavLink ,Link} from "react-router-dom";
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Button,Row ,Col,Image, Card} from "react-bootstrap";



export default class home extends Component {
    
    render() {
        return (

            <div>

            <NavLink

              as={Link}
              to={`/city`}
              className="btn btn-warning btn-block mb-3"
              variant="outline-warning"
            
            >
              Descover City
            </NavLink>
        

            <NavLink

            as={Link}
            to={`/package`}
            className="btn btn-warning btn-block mb-3"
            variant="outline-warning"
            
            >
            Buy Package
            </NavLink>

 
            </div>
        )
    }
}
