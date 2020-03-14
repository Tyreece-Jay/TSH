/*eslint-disable*/
import React from "react";
import "../assets/css/style.css"

// reactstrap component
import { Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="copyright" id="copyright" style={{ float: "Right" }}>
          © {new Date().getFullYear()}, created by{" "}
            TSH
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
