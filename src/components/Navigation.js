import React from "react";
import mod from "../assets/img/TSH Logo.png"

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
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" style={{ backgroundColor: '#82c8ba' }}>
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              onClick={() => { window.scrollTo(0, 0) }}
              id="navbar-brand"
              className="hover"
            >
              {/* <img src={mod} alt="Logo" style={{ height: "25px" }}/> */}
TSH            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end hover"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  onClick={() => { window.scrollTo(1000, 1000) }}
                >
                  <p>Servers</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => { window.scrollTo(1500, 1500) }}
                >
                  <p>Store</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => { window.scrollTo(2500, 2500) }}
                >
                  <p>Donate</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://discord.gg/yrN6YAK"
                  target="_blank"
                  id="discord-tooltip"
                >
                  <i className="fab fa-discord"></i>
                  <p className="d-lg-none d-xl-none">Discord</p>
                </NavLink>
                <UncontrolledTooltip target="#discord-tooltip">
                  Join our Discord server
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.youtube.com/channel/UCdMzu9dIRED9uxthsmrKKLA?sub_confirmation=1"
                  target="_blank"
                  id="youtube-tooltip"
                >
                  <i className="fab fa-youtube"></i>
                  <p className="d-lg-none d-xl-none">Youtube</p>
                </NavLink>
                <UncontrolledTooltip target="#youtube-tooltip">
                  Subscribe to our Youtube
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/tsh_yt/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
