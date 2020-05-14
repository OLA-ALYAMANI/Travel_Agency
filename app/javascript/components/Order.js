import React, { Component } from 'react'
import { passCsrfToken } from '../util/helpers'
import axios from 'axios'
import { Button, Col, Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Icon from "../../assets/images/undraw_add_to_cart_vkjp.png"

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
            .then(res => {
                console.log(res.data);
                this.setState({
                    package_id: res.data.filter(
                        (element) => element.id == this.props.match.params.id
                    )[0].id,
                });
                console.log("heee" + this.state.package_id)
                this.postOrder()


            }).catch(erorr => {
                console.log(erorr);

            })
        //2- list all user or make user id avilable in  all ap



    }
    render() {
        return (

            <Container md={6} className="mt-5" style={{ width: "110ex" }}>
                <Card style={{ textAlign: "center", marginTop: "30ex" }}>
                    <Row>
                        <Col className="md-4">
                            <img src={Icon} className="icon"/>
                            {/* <Card.Img src={Icon} alt="add" ></Card.Img> */}
                        </Col>
                        <Col className="md-8">
                            <Card.Body>
                                <h1>Order</h1>
                                <h3>  Order {this.state.package_id} Is In Your Shopping Card </h3>
                                <Button as={Link} to="/shoppingCart" variant="warning" size="medium" className="mt-3 butmargin">See the cart</Button>
                                <Button as={Link} to="/Package" variant="warning" size="medium" className="mt-3 butmargin">Back</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        )
    }
}
