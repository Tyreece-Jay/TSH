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
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {/* {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null} */}
      <nav class="navbar navbar-fixed-top" className="fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" onClick={() => { window.scrollTo(0, 0) }} >TSH</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a onClick={() => { window.scrollTo(1000, 1000) }}>Servers</a></li>
      <li><a onClick={() => { window.scrollTo(1500, 1500) }}>Store</a></li>
      <li><a onClick={() => { window.scrollTo(2500, 2500) }}>Donate</a></li>
      <li><a href="https://discord.gg/yrN6YAK">Discord</a></li>
      <li><a href="https://www.youtube.com/channel/UCdMzu9dIRED9uxthsmrKKLA?sub_confirmation=1">Youtube</a></li>
      <li><a href="https://www.instagram.com/tsh_yt/">Instagram</a></li>
    </ul>
  </div>
</nav>
      {/* <Navbar className="fixed-top">
        <NavItem>
    <NavLink onClick={() => { window.scrollTo(0, 0) }} className="hover"><img src={logo} alt="Logo" style={{ height: "25px" }} />TSH</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => { window.scrollTo(1000, 1000) }}>Servers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => { window.scrollTo(1500, 1500) }}>Store</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => { window.scrollTo(2500, 2500) }}>Donate</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://discord.gg/yrN6YAK" target="_blank" id="discord-tooltip">Discord</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.youtube.com/channel/UCdMzu9dIRED9uxthsmrKKLA?sub_confirmation=1" target="_blank" id="youtube-tooltip">Youtube</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.instagram.com/tsh_yt/" target="_blank" id="instagram-tooltip">Instagram</NavLink>
        </NavItem>
      </Navbar> */}
    </>
  );
}

export default Navigation;
