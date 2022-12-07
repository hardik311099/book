import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { projectAPI } from "../projectAPI";

import "./categoryadd.css";

function CategoryAdd() {
  const [categoryName, setcategoryName] = useState("");

  const saveCategory = () => {
    projectAPI
      .post(categoryName)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("data post err" + err);
      });
  };
  const onsubmithendler = (e: any) => {
    e.preventDefault();
    console.log(categoryName);

    console.log(e.target.value);
    saveCategory();
  };
  const onchangehendler = (e: any) => {
    setcategoryName(e.target.value);
  };
  return (
    <>
      <div className="categoryadd">
        <div className="categoryaddwarrep">
          <div className="categoryadd_title">
            <h2>Add Category</h2>
          </div>

          <div className="categoryadd_from">
            <form className="categoryaddfrom" onSubmit={onsubmithendler}>
              <label>Category Name:</label>
              <input
                required
                max={5}
                onChange={onchangehendler}
                placeholder="Category Name"
                type={"text"}
                className="categoryaddInput"
              />
              <div className="categoryadd_btn">
                {categoryName.length === 5 ? (
                  <NavLink to="/category">
                    <button className="categoryaddButton" type="submit">
                      Submit
                    </button>
                  </NavLink>
                ) : (
                  <button className="categoryaddButton" type="submit">
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryAdd;
