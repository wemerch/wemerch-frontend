import React from "react";
import ReactDOM from "react-dom";
import '../src/styles/css/app.css'
//components
import Nav from "./components/nav.js"
import Main from "./components/main.js"
import WhoWeAre from "./components/whoweare.js"
import WhatWeDo from "./components/whatwedo.js"
import ContactUs from "./components/contactus.js"

const App = () => {
  return (
      <>
        <Nav />
        <Main />
        <WhoWeAre />
        <WhatWeDo />
        <ContactUs />
      </>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));