import React, { Component } from 'react'
import axios from 'axios'
import { passCsrfToken } from '../util/helpers'
import { Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Card from './Card'
import City from './City'
import Footer from './Footer'
import Places from './Places'
import Package from './Package'
import Logo from "./Tlogo.PNG"
import Navb from './Navb'
import Order from './Order'
import {Signin} from './User/Signin.js'
import {Signup} from './User/Signup'
import ShoppingCard from './ShoppingCard'
import { Navbar, Nav, Button} from 'react-bootstrap'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

var sectionStyle = {
    width: "100%",
    height: "570px",

};

export default class App extends Component {
    render() {
        return (
             <div>
        <Router>
        <Navb/>
        <div className="landing">
            
                <section style={sectionStyle}>
                    <div>
                        <h1>DISCOVER THE KINGDOM</h1>
                        <h3>Between two seas… Saudi Arabia</h3>
                    </div>
                    <div className="mt-5 mb-5">
                            <Button as={Link} to="/City" bg="warning" variant="outline-warning" className="ml-3 mb-5 big"> Discover City </Button>
                            <Button as={Link} to="/Package"  bg="warning" variant="outline-warning" className="ml-3 mb-5 big"> Trip Packege </Button>
                        </div>
                </section>
                <Footer/>

            </div>
        
        <Switch>
           <Route path='/home' component ={Home}/>
           <Route exact path="/About" component={About} />

          <Route exact path="/places/:id" component={Places} />
          <Route exact path="/new_post" component={Package} />
          <Route path="/orderPackage/:id" component={Order} />
          <Route path="/shoppingCard" component={ShoppingCard } />
          
          <Route exact path="/city" component={City} />
          <Route exact path="/package" component={Package} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />

        </Switch>
        </Router>

        {/* <Home></Home> */}
         </div>
        )
    }
}
