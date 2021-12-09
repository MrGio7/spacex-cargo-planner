import React, { useState } from "react";
import logo from "../../assets/logo.svg";

const NavBar = (props) => {
  const [selected, setSelected] = useState("");

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
            <li
              key={i}
              className={selected === v.id ? "selected" : null}
              onClick={() => {
                setSelected(v.id);
                props.setSelectedCompanyValue(v);
                props.setNavOpenedState(!props.navOpened)
              }}
            >
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
      <div className={props.navOpened ? "navigation opened" : "navigation"}>{shipmentList}</div>
      <div
        className={props.navOpened ? "burger opened" : "burger"}
        onClick={() => props.setNavOpenedState(!props.navOpened)}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default NavBar;
