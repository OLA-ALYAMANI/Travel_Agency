import React, { Component } from 'react'
import Places from './Places'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink ,Link} from "react-router-dom";
import { Form, Container, Button,Row ,Col,Image, Card} from "react-bootstrap";
import CityCard from './CityCard'


export default class City extends Component {
    state = {
        city_information_model:[]  
    }
    componentDidMount(){
        
        //get city information data
        axios.get('/city_information.json')
        .then(data =>{
            console.log(data.data.city);
            this.setState({
                city_information_model:data.data.city,
                
            })
        }).catch(erorr=>{
            console.log(erorr);
            
        })



    }

    render() {
        // list all city map 
        let list_all_city =this.state.city_information_model.map((cityElement,i)=>(
            <CityCard city={cityElement} key={i}/>
        ))
        return (
            <div>
         <Container className="mt-5 mb-5" fluid >
          <Row className="justify-content-center" style={{padding:"0"}}>
                <h1  >Discover KSA City</h1>
                <br></br>
          </Row>
          <Row className="justify-content-center ml-5 mr-5 mt-3" >
                <h6>We’re here to wow the world from first ‘hello’ to last ‘goodbye’ with tailor made itineraries for all kinds of travellers - whether luxury lovers or culture vultures. Here is a sample of an itinerary full of key highlights of our county.</h6>
          </Row>
          <Row className="justify-content-center" style={{padding:"0"}}>
          {list_all_city}
          </Row>
        </Container>
            </div>
        )
    }
}
