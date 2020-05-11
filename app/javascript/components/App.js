import React, { Component } from 'react'
import axios from 'axios'
import { passCsrfToken } from '../util/helpers'
import Home from './home'
import About from './About'
import Nav from './Navb'
import City from './City'
import Places from './Places'
import Package from './Package'
import Order from './Order'
import {Signin} from './User/Signin.js'
import {Signup} from './User/Signup'
import ShoppingCard from './ShoppingCard'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    render() {
        return (
             <div>
        <Router>
        <Nav/>
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