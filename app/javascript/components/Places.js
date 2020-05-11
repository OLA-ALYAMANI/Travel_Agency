import React, { Component } from 'react'
// import { Col, Card,Row } from "react-bootstrap";
import axios from 'axios'
import PlaceCard from './PlaceCard'

export default class Places extends Component {
    state={
        city_id:this.props.match.params.id,
        places_model:[]
    }
    componentDidMount(){
        console.log("cittty component");
        
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
        let list_all_places = this.state.places_model.map((placeElement, i)=>(
            (this.state.city_id == placeElement.city_information_id)?<PlaceCard place ={placeElement} key={i}/>:null
            
        ))

        return (
            <div>
               {list_all_places}
   
            </div>
        )
    }
}
