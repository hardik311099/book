import React, { SyntheticEvent } from "react";
import { NavLink } from "react-router-dom";
import "./signup.css";

function Signup() {
  const handelSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <div className="signup">
      <div className="signupwarrep">
        <div className="signup_title">
          <h2>Sign Up</h2>
        </div>

        <div className="signup_from">
          <form className="sufrom" onSubmit={handelSubmit}>
            <label htmlFor="userName">User Name:</label>
            <input
              placeholder="User Name"
              type={"text"}
              className="loginInput"
            />
            <label htmlFor="userName">Email :</label>
            <input placeholder="Email" type={"email"} className="loginInput" />
            <label htmlFor="userName">Password:</label>
            <input
              placeholder="Password"
              className="loginInput"
              type={"password"}
              min={6}
            />
            <label htmlFor="userName">Re-Password:</label>
            <input
              placeholder="Again Password"
              className="loginInput"
              min={6}
              type={"password"}
            />
            <div className="signup_btn">
              <button className="loginButton lbtn" type="submit">
                Sign Up
              </button>
              <div className="loginRegisterButton lbtn">
                <NavLink to="/login" className="login_button ">
                  Log In Account
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
