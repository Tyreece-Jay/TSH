/*eslint-disable*/
import React from "react";
import header from "../assets/img/header.jpg"

// reactstrap components
import { Container } from "reactstrap";

function Header() {

  return (
    <>
      <img src={header} style={{ width: '100%' }} />
    </>
  );
}

export default Header;
