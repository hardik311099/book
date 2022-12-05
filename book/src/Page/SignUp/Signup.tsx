import React from "react";
import "./signup.css";

function Signup() {
  return (
    <div className="signup">
      <div className="signup_title"></div>

      <form className="signup_from">
        <input placeholder="Username" className="loginInput" />
        <input placeholder="Email" className="loginInput" />
        <input placeholder="Password" className="loginInput" />
        <input placeholder="Password Again" className="loginInput" />
        <button className="loginButton" type="submit">
          Sign Up
        </button>

        <button className="loginRegisterButton">Log In Account </button>
      </form>
    </div>
  );
}

export default Signup;
