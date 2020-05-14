import React, { Component } from 'react'
import axios from 'axios'
import { passCsrfToken } from '../util/helpers'
import shoppingCart from './ShoppingCart'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import { Form, Container, Button, Row, Col, Image, Card, CardDeck } from "react-bootstrap";
export default class ShoppingCartCard extends Component {
   _isMounted = false;

    state={
        order_id:this.props.order.id,
        package:{},
        flag:false
    }

    componentDidMount(){
        this._isMounted = true;
        axios.get('/package.json')
            .then(res =>{
                console.log(this.props.order.package_id);
                this.setState({
                    package: res.data.filter(
                    (element) => element.id == this.props.order.package_id
                    )[0],
                    flag:true
                });
                console.log(this.state.package);
                
            }).catch(erorr=>{
                    console.log(erorr)
                })
            }


        componentWillUnmount(){
            this._isMounted = false;
            
        }


 
       deleteOrderHandler=()=>{
        let id =this.state.order_id
        console.log(id)
        // passCsrfToken(document, axios)
        
        axios.delete(
            `/orderDelete/${id}.json`
            
          ).then((res)=>{
            
            //   {this.props.history.push('/shoppingCart')}
          }).catch(erorr=>{
              console.log(erorr)
          })
          
    }


    render() {
        // console.log(this.state.order_id)
        let {  destination, flight, hotel, plan, price } = this.state.package

        return (
            <div>
           <Container fluid>
            <Row className="justify-content-center" >
             <Col md={4} className="mt-3 justify-content-center">
             <Card>
             <Card.Body className="justify-content-center">
             { this.state.flag &&( <>
                <Card.Title className={"text-center"} style={{fontSize: 30 ,backgroundColor: "rgb(255, 204, 0, 0.5)" }}>{destination.toUpperCase()}</Card.Title>
                <Card.Text><h4>Package Cost {price} RS</h4></Card.Text>
                <Card.Text><h4>{this.props.order.member} Member</h4></Card.Text>
                <Card.Text><h4>order id: {this.state.order_id}</h4></Card.Text>
                <Button
                    as={Link}
                    to="/shoppingCart"
                    bg="light"
                    variant="warning"
                    className="ml-3 mb-5 big"
                    onClick={this.deleteOrderHandler}
                  >
                    Delete order
                  </Button>
              
                </>)}
             </Card.Body>
             </Card>
             </Col>
             </Row>
             </Container>
            </div>
        )
    }
}
