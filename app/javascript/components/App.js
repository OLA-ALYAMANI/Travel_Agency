import React, { Component } from 'react'
import axios from 'axios'
import { passCsrfToken } from '../util/helpers'
import Home from './Home'
import About from './About'
import Card from './Card'
import City from './City'
import Places from './Places'
import Package from './Package'
import Logo from "./Tlogo.PNG"
import Navb from './Navb'
import Order from './Order'
// import {Signin} from './User/Signin.js'
import {Signup} from './User/Signup'
import ShoppingCard from './ShoppingCard'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { SingUp } from './User/Signup'
import Signin  from './User/Signin'

export default class App extends Component {
    render() {
        return (
             <div>
        <Router>
        <Navb/>
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
