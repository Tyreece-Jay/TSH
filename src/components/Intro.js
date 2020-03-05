import React from "react";
import mof1 from "../assets/img/247 Icon.png"
import mof2 from "../assets/img/Modded Icon.png"
import mof3 from "../assets/img/Rollback Icon.png"

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function Intro() {
  return (
    <>
      <div className="section" /*style={{ backgroundImage: "url(" + require("assets/img/intro.jpg")}}*/>
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h1 className="title" style={{ color: '#82c8ba' }}>About Us...</h1>
              <h3 className="description">
                We work tirelessly 24/7 to give you the best gaming experience on our servers.
              </h3>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
          <Col>
          <img src={mof1} alt="Logo" />
          <h2 className="title" style={{ color: '#82c8ba' }}>24/7 Uptime</h2>
           <h4 className="description">
                Our servers are hosted by an independent hosting service allowiung our srevers to have a 24/7 uptime.
              </h4>
          </Col>
          <Col>
          <img src={mof2} alt="Logo" />
          <h2 className="title" style={{ color: '#82c8ba' }}>Modded</h2>
           <h4 className="description">
                All of our serevrs are modded to give you the most uniwue and accesible playing experience when on our servers.
              </h4>
          </Col>
          <Col>
          <img src={mof3} alt="Logo" />
          <h2 className="title" style={{ color: '#82c8ba' }}>Weekly Reset</h2>
            <h4 className="description">
                we regularly wipe our servers every week to give everyone a fair playing experience that sues our servers.
              </h4>
          </Col>
          </Row>
          </Container>
      </div>
    </>
  );
}

export default Intro;
