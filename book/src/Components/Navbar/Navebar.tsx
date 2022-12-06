import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navebar() {
  let handlClick = () => {
    console.log("button");
  };
  return (
    <div>
      <header className="sticky">
        <div className="topbarContainer">
          <div className="topbarLeft">
            <NavLink to="/" className="rounded">
              <h3 className="logo">Book Shop</h3>
            </NavLink>
          </div>
          <div className="topbarCenter">
            <div className="searchBar">
              <input
                placeholder="Search for Book and Category "
                className="searchInput"
              />
              <button onClick={handlClick} className="searchbarButton">
                Search
              </button>
            </div>
          </div>
          <NavLink to="/" className="button rounded">
            <span className="icon-home"></span>
            Book
          </NavLink>
          <NavLink to="/category" className="button rounded">
            Category
          </NavLink>
          <NavLink to="/signup" className="button btn rounded">
            Sign Up
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Navebar;
