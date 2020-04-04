import React from "react";
import logo from "../assets/img/TSH Logo.png"
import "../assets/css/style.css"

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function Navigation() {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <a class="navbar-brand" onClick={() => { window.scrollTo(0, 0) }} style={{ cursor: "pointer" }}><img src={logo} alt="Logo" style={{ height: "25px" }} /></a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" onClick={() => { window.scrollTo(1500, 1500) }} style={{ cursor: "pointer" }}>Servers</a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" onClick={() => { window.scrollTo(1500, 1500) }} style={{ cursor: "pointer" }}>Store</a>
          </li> */}
          {/* <li class="nav-item">
            <a class="nav-link" onClick={() => { window.scrollTo(2500, 2500) }} style={{ cursor: "pointer" }}>Donate</a>
          </li> */}
          <li class="nav-item">
            <a class="nav-link" href="https://discord.gg/yqqKDxE">Discord</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.youtube.com/channel/UCdMzu9dIRED9uxthsmrKKLA?sub_confirmation=1">Youtube</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.instagram.com/tsh_yt/">Instagram</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
