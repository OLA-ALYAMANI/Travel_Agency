import React, { Component } from 'react'

export default class Places extends Component {
    render() {
        let {image, place, description} = this.props.place

        return (
            <div>
                <h3>place name {place}</h3>
               
            </div>
        )
    }
}
