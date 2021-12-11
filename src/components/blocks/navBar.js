import React, { useState } from "react";
import logo from "../../assets/logo.svg";

const NavBar = (props) => {
  const [selected, setSelected] = useState("");
  const {shipData, searchValue, setSelectedCompany, navOpened, setNavOpened} = props;

  const shipmentList = (
    <ul>
      {shipData
        .filter((val) => {
          if (searchValue === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchValue.toLowerCase())
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
                setSelectedCompany(v);
                setNavOpened(!navOpened)
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
      <div className={navOpened ? "navigation opened" : "navigation"}>{shipmentList}</div>
      <div
        className={navOpened ? "burger opened" : "burger"}
        onClick={() => setNavOpened(!navOpened)}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default NavBar;
