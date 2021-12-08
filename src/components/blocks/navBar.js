import React from "react";
import logo from "../../assets/logo.svg";

const NavBar = (props) => {
  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navigation">
          <h4>Shipment List</h4>
          <ul>
            <li>Select</li>
            <li>Amazon</li>
            <li>American Express</li>
            <li>Airbnb</li>
            <li>Apple</li>
          </ul>
      </div>
      <div className="burger">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default NavBar;
