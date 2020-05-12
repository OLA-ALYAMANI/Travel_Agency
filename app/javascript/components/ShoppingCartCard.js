import React, { Component } from 'react'
import axios from 'axios'
import { passCsrfToken } from '../util/helpers'

export default class ShoppingCartCard extends Component {
   _isMounted = false;

state={
    order_id:this.props.order.id,
    package:[]
}

componentDidMount(){
    this._isMounted = true;
    // axios.get('/package.json')
    //     .then(res =>{
    //         console.log(res);
    //         this.setState({
    //             package: res.data.filter(
    //               (element) => element.id == this.props.order.package_id
    //             )[0],
    //           });
              
    //     }).catch(erorr=>{
    //               console.log(erorr)
    //           })
}
componentWillUnmount(){
    this._isMounted = false;
}

       deleteOrderHandler(){
        // let id =this.state.order_id
        // passCsrfToken(document, axios)
        
        // axios.delete(
        //     `/orderDelete/${id}`
            
        //   ).then((res)=>{
        //       console.log(res)

        //   }).catch(erorr=>{
        //       console.log(erorr)
        //   })
    }


    render() {
        let { id, destination, flight, hotel, plan, price } = this.state.package

        return (
            <div>
                <h1>Your Packege Order are ...</h1>
                <h1>package title :{destination}</h1>
                <h1>price :{price}</h1>
                <h1>member :{this.props.order.member}</h1>
                <h1>order id : {this.state.order_id}</h1>
                <button onClick={this.deleteOrderHandler}>Delete order</button>
                

            </div>
        )
    }
}
