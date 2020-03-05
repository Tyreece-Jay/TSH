import React from "react";

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
  Col
} from "reactstrap";

//payapl component
import { PayPalButton } from "react-paypal-button-v2";

function Store() {
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card className="text-center">
                <CardHeader>
                  <Nav className="justify-content-center" /*data-background-color="blue"*/>
                    <NavItem>
                      <NavLink>
                        <h4>Lil Package</h4>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <p >
  10,000 Wood
  10,000 Stones
  3,000 Metal Fragments
  250 High Quality Metal
  250 Low Grade Fuel
  2 Large Storage Boxes, 3 Code Locks
  PickAxe+Hatchet+Tool Cupboard+Furnace+Repair Bench
  Boots,Pants,Shirt,Snow Jacket,Gloves
  25 Cooked Chicken
  added somethin just to make the paras the same dwiaidmfaoimdamwpdmawpmfmf\mpo
                      </p>
                      <h5>£4.99</h5>
                </CardBody>
                <CardFooter>
                  {/* <PayPalButton
                    amount="4.99"
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                      alert("Transaction completed by " + details.payer.name.given_name);
                    }}
                  /> */}
                </CardFooter>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card className="text-center">
                <CardHeader>
                  <Nav className="justify-content-center" /*data-background-color="blue"*/>
                    <NavItem>
                      <NavLink>
                        <h4>Dench Package</h4>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <p>
  2 Supply Signals
  30,000 Wood
  30,000 Stones
  10,000 Metal Fragments
  500 High Quality Metal
  1000 Low Grade Fuel
  5 Large Storage Boxes, 3 Furnaces, 5 Code Locks
  150 9mm Ammo
  150 556 Ammo
  Assault Rifle (AK47U), Bolt Action Rifle
  Metal Face Mask, Metal Chest Plate, Boots, Pants, Shirt, Gloves
  250 Cooked Chicken, Salvaged Pickaxe, Salvaged Hatchet
  5 Survey Charges and 1 Mining Quarries
  Auto Turret
                      </p>
                      <h5>£9.99</h5>
                </CardBody>
                <CardFooter>
                  {/* <PayPalButton
                    amount="9.99"
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                      alert("Transaction completed by " + details.payer.name.given_name);
                    }}
                  /> */}
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Store;
