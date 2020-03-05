import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Container,
  Row,
  Col,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";

//payapl component
import { PayPalButton } from "react-paypal-button-v2";

function Donate() {
  // const [firstFocus, setFirstFocus] = React.useState(false);

  return (
    <>
      <div
        className="section section-signup"
        style={{
          // backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Donate
                  </CardTitle>
                </CardHeader>
                <CardBody className="text-center">
                  <p>
                    Donate to us pls. we need money
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Col className="ml-auto mr-auto">
                    {/* <InputGroup
                    className={
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Amount..."
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup> */}
                    <PayPalButton
                      amount="0.01"
                      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                      onSuccess={(details, data) => {
                        alert("Transaction completed by " + details.payer.name.given_name);
                      }}
                    />
                  </Col>
                </CardFooter>
              </Form>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Donate;
