// import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

import "./bookadd.css";

function BookAdd() {
  return (
    <>
      <div className="bookadd">
        <div className="bookaddwarrep">
          <div className="bookadd_title">
            <h2>Add Book</h2>
          </div>

          <div className="bookadd_from">
            <form className="bookaddfrom" encType="multipart/form-data">
              <label>Book Name:</label>
              <input
                placeholder="Book Name"
                type={"text"}
                className="bookaddInput"
              />
              <label>Authore :</label>
              <input
                placeholder="Authore"
                type={"text"}
                className="bookaddInput"
              />
              <label>Images :</label>
              <input
                placeholder="Chooose File"
                className="bookaddInput"
                type={"file"}
                multiple
                max={5}
              />
              <label htmlFor="">Category :</label>
              <select name="Category" id="" className="bookaddInput">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <label>Price :</label>
              <input
                placeholder="Price"
                type={"number"}
                className="bookaddInput"
              />
              <div className="bookadd_btn">
                <NavLink to="/">
                  <button className="bookaddButton" type="submit">
                    Submit
                  </button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAdd;
