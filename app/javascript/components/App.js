import React, { Component } from 'react'
import axios from 'axios'
import { passCsrfToken } from '../util/helpers'
import home from './home'
import About from './About'
import Card from './Card'
import City from './City'
import Places from './Places'
import Package from './Package'
import Logo from "./Tlogo.PNG"
import Navb from './Navb'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    render() {
        return (
             <div>
        <Router>
        <Navb/>
        <Switch>
           <Route path='/home' component ={home}/>
           <Route exact path="/About" component={About} />
          <Route exact path="/places" component={Places} />
          <Route exact path="/Card" component={Card} />
        </Switch>
        </Router>
         </div>
        )
    }
}
