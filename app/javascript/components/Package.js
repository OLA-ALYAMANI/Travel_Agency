import React, { Component } from 'react'
import Order from './Order'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Button, Row, Col, Image, Card } from "react-bootstrap";
import PackageCard from './PackageCard'
import axios from 'axios'
export default class Package extends Component {
    state = {
        package_model: []
    }

    componentDidMount() {
        //get package data
        // console.log("nnnnnnnnnnnnn")
        axios.get('/package.json')
            .then(third_data => {
                console.log(third_data.data);
                this.setState({
                    package_model: third_data.data
                })
            }).catch(erorr => {
                console.log(erorr);

            })
    }


    render() {
        //list all package map
        let list_all_package = this.state.package_model.map((packageElement, i) => (
            <PackageCard package={packageElement} key={i} />
        ))
        return (
            <div>
                <Container>
                    <Row className="mt-5">
                        {list_all_package}
                    </Row>
                </Container>
            </div>
        )
    }
}
