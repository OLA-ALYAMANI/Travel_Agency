import React, { Component } from 'react'
import { passCsrfToken } from '../util/helpers'
export default class Order extends Component {
    state ={
        createNewPlace:{
            image:"km",place:"test place",description:"test des",city_information_id:1},
        city_create:{
            image:'magic?',

        }
    }
    componentDidMount(){
        // passCsrfToken(document, axios)
        // axios.post(
        //     "/city_information2",
        //     this.state.city_create
        //   ).then((res)=>{
        //       console,log(res)
        //   }).catch(erorr=>{
        //       console.log(erorr)
        //   })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
