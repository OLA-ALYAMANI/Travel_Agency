import React, { Component } from 'react'
import { passCsrfToken } from '../util/helpers'
import axios from 'axios'

export default class Order extends Component {
    state ={
            user_id:'',
            package_id:[],
            member:8
  
    }
    getUserInformation=()=>{
        let token = localStorage.getItem("token");
    
        axios.get('/auth/current_user', { 'headers': { 'Authorization':`Bearer ${token}` } })
        .then(data =>{
           this.setState({
            user_id:data.data.id
           })
            console.log(data.data.id);
  
        }).catch(erorr=>{
            console.log(erorr.response);
            
        })
    }
    postOrder(){
        setTimeout(() => {
            console.log("test test")
            passCsrfToken(document, axios)
            axios.post(
                "/orderCreate.json",
                this.state
              ).then((res)=>{
                  console.log("order")
                  console.log(res)
            // props.history.push('/home')
              }).catch(erorr=>{
                  console.log(erorr)
              })
        }, 1000)
        //back to package page
        // this.props.history.push('/package')
      }
    componentDidMount(){
        this.getUserInformation()
        //1- list all package 
        axios.get('/package.json')
        .then(res =>{
            console.log(res.data);
            this.setState({
                package_id: res.data.filter(
                  (element) => element.id == this.props.match.params.id
                )[0].id,
              });
              console.log("heee"+this.state.package_id)
              this.postOrder()
              
              
        }).catch(erorr=>{
            console.log(erorr);
            
        })
        //2- list all user or make user id avilable in  all ap



    }
    render() {
        return (
            <div>
                <h1>Order</h1>
              <h1>user Id = {this.state.user_id}</h1>
              <h3>  order id = {this.state.package_id}  Is In Your Shopping Card </h3>
            </div>
        )
    }
}
