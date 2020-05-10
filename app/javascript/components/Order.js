import React, { Component } from 'react'
import { passCsrfToken } from '../util/helpers'
import axios from 'axios'
export default class Order extends Component {
    state ={
        createNewOrder:{
            package:this.props.package,
            member:2
        }
  
    }
    componentDidMount(){
        console.log("test test")
        // passCsrfToken(document, axios)
        // axios.post(
        //     "/orderCreate",
        //     this.state.createNewOrder
        //   ).then((res)=>{
        //       console.log(res)
        //   }).catch(erorr=>{
        //       console.log(erorr)
        //   })
        console.log('test test')
        axios.get('/orderList.json')
        .then(data =>{
            console.log(data);
      
        }).catch(erorr=>{
            console.log(erorr);
            
        })
    }
    render() {
        return (
            <div>
                <h1>hi order</h1>
            </div>
        )
    }
}
