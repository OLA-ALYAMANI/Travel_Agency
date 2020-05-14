import React, { Component } from 'react'
import axios from 'axios'
import ShoppingCartCard from './ShoppingCartCard'
import {Button, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class ShoppingCard extends Component {
    _isMounted = false;

    state={
        user_id:'',
        foundOrder:[]
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
    componentDidMount(){
        this._isMounted = true;
        this.getUserInformation()
        //Found order in DB
        axios.get('/orderList.json')
        .then(res =>{
            // console.log("krack")
            // console.log(res);
            this.setState({
                foundOrder: res.data.filter(
                  (element) => element.user_id == this.state.user_id
                ),
              });
              
              
     

        }).catch(erorr=>{
            console.log(erorr);
            
        })
    }

 componentWillUnmount(){
    this._isMounted = false;
 }


    render() {
        //map foundpackage
        let list_all_order = this.state.foundOrder.map((orderEle,i)=>(
            <ShoppingCartCard order={orderEle}  key={i} />
        ))
 
        return (
            <div>        
                <Row className="mt-3 mb-3 justify-content-center" style={{ padding: "0" }}>
            <h1>Your Packege Order</h1>
            </Row>
            {list_all_order}
                <br></br>
             {/* {console.log("iuj")}
             {console.log(this.state.foundOrder)} */}
     <Row className="mt-3 mb-3 justify-content-center" style={{ padding: "0" }}>
     <Button as={Link} to="/" bg="light" variant="warning" className="ml-3 mb-5 big" style={{textAlign:"center" ,marginLeft:'90px'}}> Continue Payment</Button>
            </Row>
                

                <br></br>
                <br></br>
            </div>
        )
    }
}
