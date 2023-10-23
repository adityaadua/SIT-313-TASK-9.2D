import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavigationBar() {
  return (
    <header className="header">
      <Link classname="link" to="/">
        <label className="logo">DEV@DEAKIN</label>
      </Link>

      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="options">

      <Link classname="link" to="/post">
        <button className="option">POST</button>
        </Link>

        <Link classname="link" to="/login">
          <button className="option">LOGIN</button>
        </Link>

        <Link classname="link" to="/payment">
          <button className="option">PLAN</button>
        </Link>
      </div>

      <Outlet />
    </header>
  );
}
export default NavigationBar;
