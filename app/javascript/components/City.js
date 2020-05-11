import React, { Component } from 'react'
import Places from './Places'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink ,Link} from "react-router-dom";
import { Form, Container, Button,Row ,Col,Image, Card} from "react-bootstrap";

export default class City extends Component {
    state={
        places_model:[]
    }
    componentDidMount(){
        //get place data
        axios.get('/place.json')
        .then(second_data=>{
            console.log(second_data.data);
            this.setState({
                places_model:second_data.data
            })   
        }).catch(erorr=>{
            console.log(erorr);
            
        })
    }
    render() {
    let {id, image, city_name, city_about, lat, lng, living_cost, best_time_visit} = this.props.city
    let list_all_places = this.state.places_model.map((placeElement, i)=>(
        (id == placeElement.city_information_id)?<Places place ={placeElement} key={i}/>:null
        
    ))
        return (
            <div>
        <Container className="mt-5" fluid >
          <Row className="mt-5 justify-content-center" style={{padding:"0"}}>
          
          <Card.Title className={"text-center"} style={{backgroundColor:"rgb(244, 244, 244)"}}>*** city name {city_name} ***</Card.Title>

          {list_all_places}
          <Button>clicck</Button>
          </Row>
        </Container>


            </div>
        )
    }
}
