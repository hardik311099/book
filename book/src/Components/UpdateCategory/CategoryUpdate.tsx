import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { projectAPI } from "../projectAPI";
import { useNavigate } from "react-router-dom/dist";
import axios from "axios";

import "./categoryupdate.css";

function CategoryUpdata() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
  });
  // eslint-disable-next-line
  const { name } = user;
  const onInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:3000/api/v1/category/update/${id}`,
      user.name
    );
    navigate("/category");
  };

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:3000/api/v1/category/findone/${id}`
    );
    setUser(result.data);
    console.log(result.data);
  };
  return (
    <>
      <div className="categoryadd">
        <div className="categoryaddwarrep">
          <div className="categoryadd_title">
            <h2>Updata Category</h2>
          </div>

          <div className="categoryadd_from">
            <form className="categoryaddfrom" onSubmit={onSubmit}>
              <label>Category Name:</label>
              <input
                required
                max={5}
                value={user.name}
                placeholder={user.name}
                type={"text"}
                className="categoryaddInput"
                onChange={onInputChange}
              />
              <div className="categoryadd_btn">
                <button className="categoryaddButton">Submit </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryUpdata;
