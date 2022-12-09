import axios from "axios";
// eslint-disable-next-line
import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import { NavLink, useNavigate } from "react-router-dom";

import "./bookadd.css";

function BookAdd() {
  // eslint-disable-next-line
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);
  const [category_id, setCategory_id] = useState("");
  const [bookname, setbookname] = useState("");
  const [price, setprice] = useState("");
  const [authore, setauthore] = useState("");
  const [file, setFile] = useState([]);

  // const onChangeFiles = (e: any) => {
  //   setFile(e.target.files);
  // };

  // const getCategoryId = () => {};
  const handleFileEvent = (e: any) => {
    setFile(e.target.files);
  };
  const handlebooknameEvent = (e: any) => {
    setbookname(e.target.value);
  };
  const handleauthoreEvent = (e: any) => {
    setauthore(e.target.value);
  };
  const handleCategoryEvent = (e: any) => {
    setCategory_id(e.target.value);
  };
  const handlePriceEvent = (e: any) => {
    setprice(e.target.value);
  };

  // const onInputChange = (e: any) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  function submitHandler(e: any): void {
    e.preventDefault();
    console.log("1234");
    var formData = new FormData();
    formData.append("bookname", bookname);
    formData.append("authore", authore);
    file.map((file, index) => {
      formData.append(`file${index}`, file);
    });
    formData.append("category_id", category_id);
    formData.append("price", price);

    axios
      .post("http://localhost:3000/api/v1/book/create", formData, {
        headers: {
          " Content-Type": "multipart/form-data",
        },
      })
      .then((res: any) => {
        console.log(res);

        // navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/category/list"
      );
      setCategory(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bookadd">
        <div className="bookaddwarrep">
          <div className="bookadd_title">
            <h2>Add Book</h2>
          </div>

          <div className="bookadd_from">
            <form className="bookaddfrom" encType="" onSubmit={submitHandler}>
              <label>Book Name:</label>
              <input
                onChange={handlebooknameEvent}
                placeholder="Book Name"
                type={"text"}
                name="bookname"
                className="bookaddInput"
                value={bookname}
              />
              <label>Authore :</label>
              <input
                name="authore"
                onChange={handleauthoreEvent}
                placeholder="Authore"
                type={"text"}
                className="bookaddInput"
                value={authore}
              />
              <label>Images :</label>
              <input
                name="file"
                placeholder="Chooose File"
                value={file}
                onChange={handleFileEvent}
                className="bookaddInput"
                type={"file"}
                multiple
              />
              <label htmlFor="">Category :</label>
              <select
                id=""
                name="category_id"
                className="bookaddInput"
                onClick={getData}
                onChange={handleCategoryEvent}
              >
                {category.map((e: any) => (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>

              <label>Price :</label>
              <input
                name="price"
                value={price}
                onChange={handlePriceEvent}
                placeholder="Price"
                type={"number"}
                className="bookaddInput"
              />
              <div className="bookadd_btn">
                <button className="bookaddButton" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAdd;
