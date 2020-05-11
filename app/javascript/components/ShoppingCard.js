import React, { Component } from 'react'
import axios from 'axios'
import { passCsrfToken } from '../util/helpers'

export default class ShoppingCard extends Component {
    state={
        user_id:5,
        foundOrder:[],
        foundPackage:[]
    }

    //Found The Packge in DB
    getPackage(){
        setTimeout(() => {
        axios.get('/package.json')
        .then(res =>{
            console.log(res);
            this.setState({
                foundPackage: res.data.filter(
                  (element) => element.id == this.state.foundOrder.package_id
                )[0],
              });
              
        }).catch(erorr=>{
                  console.log(erorr)
              })
        }, 1000)
      }


    componentDidMount(){
        //Found order in DB
        axios.get('/orderList.json')
        .then(res =>{
            console.log(res);
            this.setState({
                foundOrder: res.data.filter(
                  (element) => element.user_id == this.state.user_id
                )[0],
              });
              console.log(this.state.foundOrder.package_id);
              
              //call method to Found Package
              this.getPackage()

        }).catch(erorr=>{
            console.log(erorr);
            
        })
    }

    // deleteOrderHandler(){
    //     passCsrfToken(document, axios)
    //     let id =7
    //     axios.delete(
    //         "/orderDelete",id
            
    //       ).then((res)=>{
    //           console.log(res)

    //       }).catch(erorr=>{
    //           console.log(erorr)
    //       })
    // }


    render() {
        return (
            <div>
                <h1>Your Packege Order are ...</h1>
                <h1>package title :{this.state.foundPackage.destination}</h1>
                <h1>price :{this.state.foundPackage.price}</h1>
                <h1>member :{this.state.foundOrder.member}</h1>
                {/* <button onClick={this.deleteOrderHandler()}>Delete order</button> */}
                <button>Update order</button>
            </div>
        )
    }
}
