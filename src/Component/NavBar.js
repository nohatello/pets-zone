import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon.js";

export const NavBar = () => {
  return (
    <nav
      style={{
        paddingLeft: "30px",
      }}
      className="navbar navbar-expand-lg navbar-light "
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pets Zone{" "}
        </a>{" "}
        <button
          className="navbar-toggler"
          type="button"
          dataBsToggle="collapse"
          dataBsTarget="#navbarSupportedContent"
          ariaControls="navbarSupportedContent"
          ariaExpanded="false"
          ariaLabel="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> </span>{" "}
        </button>{" "}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item-active">
              <Link className="nav-link" ariaCurrent="page" to="/">
                Home{" "}
              </Link>{" "}
            </li>{" "}
            <li className="nav-item-active">
              <Link className="nav-link " ariaCurrent="page" to="/services">
                Services{" "}
              </Link>{" "}
            </li>{" "}
            <li className="nav-item-active">
              <Link className="nav-link " ariaCurrent="page" to="/cart">
                Cart{" "}
              </Link>{" "}
            </li>{" "}
          </ul>{" "}
          <CartIcon />
        </div>{" "}
      </div>{" "}
    </nav>
  );
};
