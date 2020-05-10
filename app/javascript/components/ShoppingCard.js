import React, { Component } from 'react'
import axios from 'axios'
export default class ShoppingCard extends Component {
    state={}
    componentDidMount(){
        console.log('test test')
        axios.get('/orderList.json')
        .then(data =>{
            console.log(data);
            this.setState({})
      
        }).catch(erorr=>{
            console.log(erorr);
            
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
