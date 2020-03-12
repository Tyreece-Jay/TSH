import React from "react";
import intro from "../assets/img/intro.jpg"
import icon1 from "../assets/img/247 Icon.png"
import icon2 from "../assets/img/Modded Icon.png"
import icon3 from "../assets/img/Rollback Icon.png"

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function Intro() {
  return (
    <>
      <div class="jumbotron text-center" style={{ backgroundImage: `url(${intro})` }}>
        <h1 style={{ color: '#82c8ba' }}>About Us...</h1>
        <h3>We work tirelessly 24/7 to give you the best gaming experience on our servers.</h3>
        <div class="row" style={{ height: '100px' }}></div>
        <div class="row">
          <div class="col-sm-4">
            <img src={icon1} style={{ height: '150px' }} />
            <h2 style={{ color: '#82c8ba' }}>24/7 Uptime</h2>
            <p>Our servers are hosted by an independent hosting service allowiung our srevers to have a 24/7 uptime.</p>
          </div>
          <div class="col-sm-4">
            <img src={icon2} style={{ height: '150px' }} />
            <h2 style={{ color: '#82c8ba' }}>Modded</h2>
            <p>All of our serevrs are modded to give you the most uniwue and accesible playing experience when on our servers.</p>
          </div>
          <div class="col-sm-4">
            <img src={icon3} style={{ height: '150px' }} />
            <h2 style={{ color: '#82c8ba' }}>Weekly Reset</h2>
            <p>All of our serevrs are modded to give you the most uniwue and accesible playing experience when on our servers.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
