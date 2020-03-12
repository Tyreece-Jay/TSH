/*eslint-disable*/
import React from "react";
import header from "../assets/img/header.jpg"

// reactstrap components
import { Container } from "reactstrap";

function Header() {

  return (
    <>
      <div className="header">
        <img src={header} />
      </div>
    </>
  );
}

export default Header;
