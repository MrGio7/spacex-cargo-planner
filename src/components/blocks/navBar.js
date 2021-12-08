import React from "react";
import logo from "../../assets/logo.svg";

const NavBar = (props) => {
  const shipmentList = (
    <ul>
      {props.shipData.filter((val) => {
        if(props.searchValue === "") {
          return val
        } else if(val.name.toLowerCase().includes(props.searchValue.toLowerCase())) {
          return val
        }
      }).map((v, i) => {
        return <li key={i} className={v.id} onClick={ev => props.setSelectedCompanyValue(ev.target.className)}>{v.name}</li>;
      })}
    </ul>
  );

  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navigation">
        <h4>Shipment List</h4>
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
