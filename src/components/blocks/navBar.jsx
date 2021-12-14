import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";

const NavBar = ({ shipData, searchValue, navOpened, setNavOpened }) => {
  const location = useLocation();
  const path = location.pathname;

  const shipmentList = shipData
    .filter((val) => val.name.toLowerCase().includes(searchValue.toLowerCase()))
    .map((v) => {
      return (
        <Link
          to={`${v.id}`}
          state={{ company: { ...v } }}
          key={v.id}
          className={path === `/spacex-cargo-planner/${v.id}` ? "selected" : null}
          onClick={() => setNavOpened(false)}
        >
          {v.name}
        </Link>
      );
    });

  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <h4>Shipment List</h4>
      <nav className={navOpened ? "navigation opened" : "navigation"}>
        {shipmentList}
      </nav>
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
