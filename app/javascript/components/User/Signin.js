import React , {useState , useEffect} from 'react'
import { Row, Form, Col, Button, Alert, Container , Card , Input } from 'react-bootstrap'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'

var sectionStyle = {
    width: "100%",
    height: "650px",
};
export const Signin = (props) => {
const [signin , setSignin] = useState({})
    let onChangeInput = ({target :{name , value}}) => {
        setSignin({ ...signin, [name]: value })
    }
useEffect(() => {
    console.log(signin)
})
    let onSubmit = (e) => {
        e.preventDefault()
        Axios.post('/auth/login', signin)
        .then(res =>{
            console.log(res.data.token)
            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                // props.history.push("/home");
                window.location.href = "/home";
            }else {
                console.log("email or password is not correct")
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
        <div className="landings">
         <section style={sectionStyle}>
            {/* {isLogin && (
        <Alert variant={"danger"}>
          the email used . please change the email
        </Alert>
      )} */}
      <Container className="mt-5 mb-5  mr-5 ml-5"  >
        <Row>
        <Col className="ml-5 mr-5">
             <h1>Travel Your Passion</h1>
        </Col>
          <Col className="ml-5 mr-5" >
            <Card className="card-register ml-5 mr-5 mt-5" style={{ width: "30rem" }}>
              <h3 className="title mx-auto" style={{ fontSize: "34px" }}>
                Welcome back our Traveler
              </h3>
              <Form className="register-form mr-3 ml-3">
                <label className="mt-5">Email</label>
                <Form.Control 
                className="mb-3 "
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={(e) => onChangeInput(e)}
                />
                <label className="mt-5" >Password</label>
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
                  Sign in
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