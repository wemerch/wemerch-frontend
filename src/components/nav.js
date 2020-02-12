import React from "react";

//components
import WWA from "./whoweare.js"

//css
import "../styles/css/nav.css"
import Logo from '../styles/img/greenlogo.png'

const Nav = () => {
  return (
      <nav className="nav">
        <img className="logo" src={Logo}/>
        <ul className="ul">
            <li><a href='#WhoWeAre'>who we are</a></li>
            <li><a href="#WhatWeDo">what we do</a></li>
            <li><a >contact us</a></li>
        </ul>
      </nav>
    )
};

export default Nav;