import React from "react";
import logo from "../../assets/logo.svg";

const NavBar = (props) => {
  const shipmentList = (
    <ul>
      {props.shipData
        .filter((val) => {
          if (props.searchValue === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(props.searchValue.toLowerCase())
          ) {
            return val;
          } else {
            return null;
          }
        })
        .map((v, i) => {
          return (
            <li key={i} onClick={() => props.setSelectedCompanyValue(v)}>
              {v.name}
            </li>
          );
        })}
    </ul>
  );

  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      
      <h4>Shipment List</h4>
      <div className="navigation">
        {shipmentList}
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
