import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

var sectionStyle = {
    width: "100%",
    height: "570px",

};


export default class Home extends Component {

    render() {


        return (

            <div>

<div className="landing">
            
            <section style={sectionStyle}>
                <div>
                    <h1>DISCOVER THE KINGDOM</h1>
                    <h3>Between two seas… Saudi Arabia</h3>
                </div>
                <div className="mt-5 mb-5">
                        <Button as={Link} to="/City" bg="light" variant="warning" className="ml-3 mb-5 big"> Discover City </Button>
                        <Button as={Link} to="/Package"  bg="light" variant="warning" className="ml-3 mb-5 big"> Trip Packege </Button>
                    </div>
            </section>
            
            </div>
            </div>

        )
    }
}
