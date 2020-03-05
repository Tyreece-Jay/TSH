/*eslint-disable*/
import React from "react";

// reactstrap component
import { Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer" data-background-color="black" style={{ backgroundColor: '#101324' }}>
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, created by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            TSH
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
