import React from "react";
import "./navbar.css";

function Navebar() {
  return (
    <div>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Book</span>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <input
              placeholder="Search for Book and Category "
              className="searchInput"
            />
            <button type={"button"}>Search</button>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">All Book</span>|
            <span className="topbarLink">All Category</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navebar;
