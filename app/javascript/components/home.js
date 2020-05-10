import React, { Component } from 'react'
import axios from 'axios'
import { passCsrfToken } from '../util/helpers'
import City from './City'
import Places from './Places'
import Package from './Package'



export default class home extends Component {

    state = {
        city_information_model:[],
        package_model:[]

        
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

        //get package data
        axios.get('/package.json')
        .then(third_data=>{
            console.log(third_data.data);
            this.setState({
                package_model:third_data.data
            })   
        }).catch(erorr=>{
            console.log(erorr);
            
        })

    }
    componentWillUnmount(){
        
    }

    
    render() {
        // list all city map 
        let list_all_city = this.state.city_information_model.map((cityElement,i)=>(
            <City city={cityElement} key={i}/>
        ))

        //list all package map
        let list_all_package = this.state.package_model.map((packageElement,i)=>(
            <Package package={packageElement} key={i}/>
        ))

        return (

            <div>

            
                <h1>This is page HELLO in React</h1>
                {/* # render list_all_city map */}
                  {list_all_city}


       
                {/* # render list_all_package map */}
                {list_all_package}
                
            </div>
        )
    }
}
