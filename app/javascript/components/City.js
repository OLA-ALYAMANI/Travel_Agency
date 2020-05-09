import React, { Component } from 'react'
import Places from './Places'
import axios from 'axios'

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
                <h2>*** city name {city_name} ***</h2>
                
                {list_all_places}
            </div>
        )
    }
}
