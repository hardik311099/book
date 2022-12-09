import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { email, password } = user;
  const onInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handelSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);
    let url = "http://localhost:3000/api/v1/admin/login";

    axios
      .post(url, user)
      .then((res: any) => {
        setIsLoading(false);
        console.log(res.data);
        localStorage.setItem("auth-token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
    setIsLoading(false);
  };
  return (
    <div className="log">
      <div className="logwarrep">
        <div className="log_title">
          <div className="ltitle">Log In</div>
        </div>

        <div className="Log_from">
          <form className="lifrom" onSubmit={handelSubmit}>
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

            <div className="log_btn">
              {isLoading && <p>Sending Request...</p>}
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
