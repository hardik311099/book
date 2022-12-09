import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { userName, email, password } = user;
  const onInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handelSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);
    let url = "http://localhost:3000/api/v1/admin/signup";

    axios
      .post(url, user)
      .then((res: any) => {
        setIsLoading(false);
        console.log(res.data);
        localStorage.setItem("auth-token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
    setIsLoading(false);
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
              name="userName"
              onChange={onInputChange}
              placeholder="User Name"
              type={"text"}
              value={userName}
              className="loginInput"
            />
            <label htmlFor="userName">Email :</label>
            <input
              placeholder="Email"
              type={"email"}
              value={email}
              onChange={onInputChange}
              name="email"
              className="loginInput"
            />
            <label htmlFor="userName">Password:</label>
            <input
              onChange={onInputChange}
              name="password"
              value={password}
              placeholder="Password"
              className="loginInput"
              type={"password"}
              min={6}
            />

            <div className="signup_btn">
              {isLoading && <p>Sending Request...</p>}
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
