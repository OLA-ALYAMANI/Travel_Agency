import React, { Component } from 'react'
import axios from 'axios'
import ShoppingCartCard from './ShoppingCartCard'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class ShoppingCard extends Component {
    _isMounted = false;

    state={
        user_id:1,
        foundOrder:[]
    }


    componentDidMount(){
        this._isMounted = true;
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
                {list_all_order}
                <br></br>
             {/* {console.log("iuj")}
             {console.log(this.state.foundOrder)} */}

                <Button as={Link} to="/" bg="light" variant="warning" className="ml-3 mb-5 big" style={{textAlign:"center" ,marginLeft:'90px'}}> Continue Payment</Button>

                <br></br>
                <br></br>
            </div>
        )
    }
}
