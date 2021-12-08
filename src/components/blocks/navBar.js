import React from "react";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  return (
    <div class="navBar">
      <div class="logo">
        <img src={logo} alt="logo" />
      </div>
      <div class="navigation">
          <h4>Shipment List</h4>
          <ul>
            <li>Select</li>
            <li>Amazon</li>
            <li>American Express</li>
            <li>Airbnb</li>
            <li>Apple</li>
          </ul>
      </div>
      <div class="burger">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
  );
};

export default NavBar;
