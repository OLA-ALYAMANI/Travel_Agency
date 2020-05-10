import React, { Component } from 'react'
import Order from './Order'
export default class Package extends Component {

    render() {
        let {id,destination,flight,hotel,plan,price} = this.props.package
        return (
            <div>
                
                <h1> {destination}</h1>
                <h1>{price}</h1>
                <h1>click to buy</h1>
             
                <Order package={this.props.package}/>
           
                
                
            </div>
        )
    }
}
