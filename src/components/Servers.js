import React from "react";
import dawd from "../assets/img/Rust wtext.jpg"

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

function Servers() {
  return (
    <>
      <div className="section section-tabs" /*style={{ backgroundImage: "url(" + require("assets/img/servers.jpg")}}*/>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card>
                <CardHeader >
                  <Nav className="justify-content-center">
                    <NavItem>
                      <img src={dawd} alt="Logo" /><h1>TSH UK/EU</h1>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                <p>Welcome to the TSH UK/EU Rust Server</p>
                <p>Map and BP wipe every Thursday, max clan size is 4, x2 gathering, custom events, extra loot, custom kits.</p>
                        <p>Aiming for a comfortable mix between modded and vanilla. If you have any suggestions or want to be a part of our community, join our Discord by.</p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button style={{ backgroundColor: '#82c8ba' }} type="button">
                    Play Now
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Servers;
