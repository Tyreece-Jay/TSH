import React, {useState, useEffect} from "react";
import axios from 'axios';
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
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fecthData =  async () => {
      await axios
      .get("https://api.rust-servers.info/status/3466")
      .then(result => setResponse(result.data))
      setLoading(false)
    };
    fecthData();

  }, []);

  // const useFetch = () => {
  //   const [response, setResponse] = React.useState(null);
  //   useEffect(async () => {
  //       const res = await fetch("https://api.rust-servers.info/status/3466");
  //       const json = await res.json();
  //       setResponse(json);
  //   });
  //   return response;
  // };

  // useFetch()]
  if (response !== undefined){
  console.log({response})
    var p = response.name 
  console.log({p})
  }

  return (
    <>
    {loading ? (<div></div>) : (
      <div className="servers" style={{ backgroundImage: `url(${servers})` }}>
        <Card style={{ width: '500px', margin: "auto" }} >
          <img class="card-img-top" src={rust} />
          <div class="card-body">
            <h2>{response.name} <span class="badge badge-pill badge-secondary">{response.status}</span></h2>
            <h6>Players: {response.players}/{response.players_max}</h6>
            <p>Welcome to the TSH UK/EU Rust Server</p>
            <p>Map and BP wipe every Thursday, max clan size is 4, x2 gathering, custom events, extra loot, custom kits.</p>
            <p>Aiming for a comfortable mix between modded and vanilla. If you have any suggestions or want to be a part of our community, join our Discord.</p>
            <Button style={{ backgroundColor: '#82c8ba' }} type="button" href="steam://connect/164.132.69.32:28015">
              Play Now
            </Button>
          </div>
        </Card>
      </div>
      )};
    </>
  );
}

export default Servers;
