import React, { Component } from 'react'
import axios from 'axios'
import { passCsrfToken } from '../util/helpers'
import home from './home'
import About from './About'
import Nav from './Navb'
import City from './City'
import Places from './Places'
import Package from './Package'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SingUp } from './User/Signup'
import { Signin } from './User/Signin'

export default class App extends Component {
    render() {
        return (
             <div>
        <Router>
        <Nav/>
        <Switch>
           <Route path='/home' component ={home}/>
           <Route exact path="/About" component={About} />
          <Route exact path="/places" component={Places} />
          <Route exact path="/new_post" component={Package} />
          <Route exact path="/signup" component={SingUp} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
        </Router>
         </div>
        )
    }
}
