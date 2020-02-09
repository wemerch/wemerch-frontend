import React from "react";
import ReactDOM from "react-dom";
import '../src/styles/css/app.css'
//components
import Nav from "./components/nav.js"

const App = () => {
  return (
      <>
        <Nav />
      </>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));