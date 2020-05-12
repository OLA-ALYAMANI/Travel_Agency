import React, { Component } from 'react'
import { passCsrfToken } from '../util/helpers'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default class Order extends Component {
    state = {
        user: [],
        package_id: [],
        member: 8

    }
    postOrder() {
        setTimeout(() => {
            console.log("test test")
            passCsrfToken(document, axios)
            axios.post(
                "/orderCreate",
                this.state
            ).then((res) => {
                console.log(res)
                // props.history.push('/home')
            }).catch(erorr => {
                console.log(erorr)
            })
        }, 1000)
        //back to package page
        // this.props.history.push('/package')
    }
    componentDidMount() {
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
            <div style={{textAlign: "center"}}>
                <h1>Order</h1>
                <h3>  Order {this.state.package_id} Is In Your Shopping Card </h3>
                <Button as={Link} to="/Package" variant="warning" className="ml-3 mb-5 big">Back</Button>
            </div>
        )
    }
}
