import React from "react";

// core components
import Navigation from "./components/Navigation";
import Header from "./components/Header.js";
import Intro from "./components/Intro.js";
import Servers from "./components/Servers.js";
import Store from "./components/Store.js";
import Donate from "./components/Donate.js";
import Footer from "./components/Footer.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
      <Navigation />
      <Header />
      <Intro />
      <Servers />
      {/* <Store /> */}
      {/* <Donate /> */}
      <Footer />
    </>
  );
}

export default Index;
