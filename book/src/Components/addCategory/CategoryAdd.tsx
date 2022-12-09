import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { projectAPI } from "../projectAPI";
import { useNavigate } from "react-router-dom/dist";
import axios from "axios";

import "./categoryadd.css";

function CategoryAdd() {
  const [categoryName, setCategoryName] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onInputChange = (e: any) => {
    setCategoryName({ ...categoryName, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("http://localhost:3000/api/v1/category/create", categoryName)
      .then((res: any) => {
        setIsLoading(false);

        console.log(res.data);
        navigate("/category");
        // localStorage.setItem("feature", res.data.name);
      })
      .catch((err) => {
        alert(err.message);
      });
    setIsLoading(false);
  };

  return (
    <>
      <div className="categoryadd">
        <div className="categoryaddwarrep">
          <div className="categoryadd_title">
            <h2>Add Category</h2>
          </div>

          <div className="categoryadd_from">
            <form className="categoryaddfrom" onSubmit={submitHandler}>
              <label>Category Name:</label>
              <input
                required
                max={5}
                name="name"
                value={categoryName.name}
                placeholder="Category Name"
                type={"text"}
                className="categoryaddInput"
                onChange={onInputChange}
              />
              <div className="categoryadd_btn">
                {categoryName.name.length >= 5 ? (
                  <button className="categoryaddButton">Submit </button>
                ) : (
                  <button disabled className="categoryaddButton">
                    Submit
                  </button>
                )}
                {isLoading && <p>Sending Request...</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryAdd;
