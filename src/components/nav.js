import React from "react";

//css
import "../styles/css/nav.css"
import Logo from '../styles/img/wemerch_logo.png'

const Nav = () => {
  return (
      <nav className="nav">
        <img className="logo" src={Logo}/>
        <ul className="ul">
            <li><a>who we are</a></li>
            <li><a>what we do</a></li>
            <li><a>contact us</a></li>
        </ul>
      </nav>
    )
};

export default Nav;