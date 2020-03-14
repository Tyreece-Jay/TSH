import React from "react";
import servers from "../assets/img/servers.jpg"
import rust from "../assets/img/Rust wtext.jpg"
import "../assets/css/style.css"

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
      <div className="servers" style={{ backgroundImage: `url(${servers})` }}>
        <Card style={{ width: '500px', margin: "auto" }} >
          <img class="card-img-top" src={rust} />
          <div class="card-body">
            <h2>TSH UK/EU</h2>
            <p>Welcome to the TSH UK/EU Rust Server</p>
            <p>Map and BP wipe every Thursday, max clan size is 4, x2 gathering, custom events, extra loot, custom kits.</p>
            <p>Aiming for a comfortable mix between modded and vanilla. If you have any suggestions or want to be a part of our community, join our Discord.</p>
            <Button style={{ backgroundColor: '#82c8ba' }} type="button">
              Play Now
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Servers;
