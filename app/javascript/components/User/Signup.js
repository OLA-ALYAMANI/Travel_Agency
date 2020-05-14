import React, { useState} from 'react'
import { Row, Form, Col, Button, Alert, Container , Card , Input } from 'react-bootstrap'
import Axios from 'axios'

var sectionStyle = {
    width: "100%",
    height: "650px",

};
export const Signup = (props) => {
    const [user, setUser] = useState({})// user info
    const [register , setRegister] = useState(false) // to show aleart
  console.log(user)
    //to add the input inside user
    let onChangeInput = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }
    // to add the user info to database
    let onSubmit = (e) => {
        e.preventDefault()
        Axios.post('/users/signup', user)
            .then(res => {
                console.log(res.data)
                    if (res.data){
                        props.history.push('/signin')
               }else{
                        setRegister(true)
                        setTimeout(() => {
                            setRegister(false)
                        }, 4000);
                    } 
            })
            .catch(err => console.log(err.response))
    }
    return (
        <div>
        <div className="landings">
         <section style={sectionStyle}>
            {register && (
        <Alert variant={"danger"}>
          the email used . please change the email
        </Alert>
      )}
      <Container className=" mb-5  mr-5 ml-5"  >
        <Row>
        <Col ><h1>Warrning ... you will fall in love with this country</h1></Col>
          <Col className="ml-5 mr-5" >
            <Card className="card-register ml-5 mr-5 mt-5" style={{ width: "30rem" }}>
              <h3 className="title mx-auto" style={{ fontSize: "34px" }}>
                Become a Traveler
              </h3>
              <Form className="register-form mr-3 ml-3">
                <label className="mt-5">Name</label>
                <Form.Control 
                className="mb-3"
                  placeholder="Name"
                  name="name"
                  onChange={(e) => onChangeInput(e)}
                />

                <label>Email</label>
                <Form.Control 
                  placeholder="Email"
                  className="mb-3 "
                  type="email"
                  name="email"
                  onChange={(e) => onChangeInput(e)}
                />

                <label >Password</label>
                <Form.Control 
                className="mb-3 "
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={(e) => onChangeInput(e)}
                />

                <Button
                  block
                  className="btn-round  mt-3 mb-3"
                  color="warning"
                  bg="light" variant="warning"
                  type="submit"
                  onClick={(e) => onSubmit(e)}
                >
                  SignUp
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      </section>
        </div>
        </div>
    )
            }
        
