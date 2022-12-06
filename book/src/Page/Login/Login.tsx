import React, { SyntheticEvent } from "react";
import { NavLink } from "react-router-dom";
import "./login.css";

function Login() {
  const handelSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log("submit");
  };
  return (
    <div className="log">
      <div className="logwarrep">
        <div className="log_title">
          <div className="ltitle">Log In</div>
        </div>

        <div className="Log_from">
          <form className="lifrom" onSubmit={handelSubmit}>
            <label htmlFor="userName">User Name Or Email:</label>
            <input
              placeholder="User Name & Email"
              type={"text"}
              className="logInput"
            />

            <label htmlFor="userName">Password:</label>
            <input
              placeholder="Password"
              className="logInput"
              type={"password"}
              min={6}
            />
            <div className="log_btn">
              <button className="logButton libtn" type="submit">
                Log In
              </button>
              <div className="logRegisterButton libtn">
                <NavLink to="/signup" className="login_button ">
                  Create In Account
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
