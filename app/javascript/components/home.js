import React, { Component } from "react";
import { Button, Card, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

var sectionStyle = {
  width: "100%",
  height: "850px",
};
export default class Home extends Component {

  componentDidMount() {
    console.log("test token ");
    let token = localStorage.getItem("token");
    console.log("test token == " + token);

    axios
      .get("/auth/current_user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => {
        console.log(data);
        console.log(data.data.id);
      })
      .catch((erorr) => {
        console.log(erorr.response);
      });
  }
  render() {
    return (
      <div>
        <div className="landing">
          <section style={sectionStyle}>
            <div>
              <h1>DISCOVER THE KINGDOM</h1>
              <h3>Between two seas… Saudi Arabia</h3>
            </div>
            <div className="mt-5">
              <Button
                as={Link}
                to="/City"
                bg="light"
                variant="warning"
                className="ml-3 mb-3 big"
              >
                {" "}
                Discover City{" "}
              </Button>

              <Button
                as={Link}
                to="/Package"
                bg="light"
                variant="warning"
                className="ml-3 mb-3 big"
              >
                {" "}
                Trip Packege{" "}
              </Button>
            </div>
            <Container className="md-auto" fluid>
              <Row className="justify-content-center mb-5">
                <Card bg="dark" border="warning">
                  <video
                    src={"https://res.cloudinary.com/duy2a2gji/video/upload/v1589405854/Travel_Agency_Vid_elhusz.mov"}
                    style={{ width: "20rem", height: "30rem" }}
                    controls
                    autoplay
                  />


                </Card>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    );
  }
}
