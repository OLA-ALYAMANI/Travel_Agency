import React, { Component } from 'react'

export default class Package extends Component {
    render() {
        let {destination,flight,hotel,plan,price} = this.props.package
        return (
            <div>
                <h1>Package page </h1>
                <h1> {destination}</h1>
            </div>
        )
    }
}
