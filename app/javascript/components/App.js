import React, { Component } from 'react'
import axios from 'axios'
import { passCsrfToken } from '../util/helpers'
import Home from './home'
import About from './About'
import City from './City'
import Footer from './Footer'
import Places from './Places'
import Package from './Package'
import Logo from "./Tlogo.PNG"
import Navb from './Navb'
import Order from './Order'
// import {Signin} from './User/Signin.js'
import {Signup} from './User/Signup'
import ShoppingCart from './ShoppingCart'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { SingUp } from './User/Signup'
import {Signin}  from './User/Signin'


export default class App extends Component {
    // componentDidMount(){
    //     // passCsrfToken(document, axios)
    //     console.log("test token ")
    //     //gets token from localstorage
    //     let token = localStorage.getItem("token");
    //     console.log("test token == "+token)
    
    //     axios.get('/auth/current_user', { 'headers': { 'Authorization':`Bearer ${token}` } })
    //     .then(data =>{
            
    //         console.log(data);
  
    //     }).catch(erorr=>{
    //         console.log(erorr.response);
            
    //     })
        
    // }
    render() {
        return (
             <div>
        <Router>
        <Navb/>
        <Switch>
           <Route exact path='/' component ={Home}/>
           {/* <Route path='/home' component ={Home}/> */}
           <Route exact path="/About" component={About} />

          <Route exact path="/places/:id" component={Places} />
          <Route exact path="/new_post" component={Package} />
          <Route path="/orderPackage/:id" component={Order} />
          <Route path="/shoppingCart" component={ShoppingCart} />
          
          <Route exact path="/city" component={City} />
          <Route exact path="/package" component={Package} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />

        </Switch>
        <div className="landing">
        <Footer/>
        </div>
        </Router>

        {/* <Home></Home> */}
         </div>
        )
    }
}
