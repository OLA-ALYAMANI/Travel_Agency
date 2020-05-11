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
         <Container className="mt-5" fluid >
          <Row className="mt-5 justify-content-center" style={{padding:"0"}}>
                <h1>city page</h1>
                {list_all_city}
          </Row>
        </Container>
            </div>
        )
    }
}
