import React, { useEffect, useState } from "react";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import Login from "../../Page/Login/Login";

function Navebar() {
  const navigate = useNavigate();
  const [isLogin, setisLogin] = useState(false);
  // useEffect(() => {
  //   if (localStorage.getItem("auth-token")) {
  //     setisLogin(true);
  //   }
  // }, []);

  const loginHandler = () => {
    if (!localStorage.getItem("auth-token")) {
      setisLogin(true);
    } else {
      localStorage.removeItem("auth-token");
      setisLogin(true);
      navigate("/login");
    }
  };
  // const logoutHandler = () => {
  //   localStorage.removeItem("auth-token");
  //   setisLogin(false);
  // };
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
          {/* {isLogin ? (
            <NavLink
              to="/login"
              onClick={logoutHandler}
              className="button btn rounded"
            >
              Log Out
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              onClick={loginHandler}
              className="button btn rounded"
            >
              Login
            </NavLink> */}
          {/* )} */}
          <NavLink
            to="/login"
            onClick={loginHandler}
            className="button btn rounded"
          >
            {isLogin ? "Log Out" : "Log In"}
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Navebar;
