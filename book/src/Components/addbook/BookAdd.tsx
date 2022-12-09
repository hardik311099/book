import axios from "axios";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./bookadd.css";

function BookAdd() {
  // eslint-disable-next-line
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [files, setFiles] = useState([]);
  const [bookname, setBookname] = useState("");
  const [authore, setAuthore] = useState("");

  const onInputChangePrice = (e: any) => {
    e.preventDefault();
    setPrice(e.target.value);
  };
  const getCategoryId = (e: any) => {
    e.preventDefault();
    console.log("cetogory id", e.target.value);

    setCategory(e.target.value);
  };
  const onInputChangeBookname = (e: any) => {
    e.preventDefault();
    setBookname(e.target.value);
  };
  const onInputChangeAuthore = (e: any) => {
    e.preventDefault();
    setAuthore(e.target.value);
  };
  const onChangeFiles = (e: any) => {
    e.preventDefault();
    setFiles(e.target.files);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    // console.log("1234", files);

    var formdata = new FormData();
    formdata.append("bookname", bookname);
    formdata.append("authore", authore);
    formdata.append("category_id", category);
    formdata.append("price", price);
    for (let i = 0; i < files.length; i++) {
      formdata.append("file", files[i]);
    }
    // formdata.append("file", files);

    axios
      .post("http://localhost:3000/api/v1/book/create", formdata, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res: any) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/category/list"
      );
      setData(response.data.data);
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
            <form className="bookaddfrom" onSubmit={submitHandler}>
              <label>Book Name:</label>
              <input
                onChange={onInputChangeBookname}
                placeholder="Book Name"
                type={"text"}
                name="bookname"
                className="bookaddInput"
                value={bookname}
              />
              <label>Authore :</label>
              <input
                name="authore"
                onChange={onInputChangeAuthore}
                placeholder="Authore"
                type={"text"}
                className="bookaddInput"
                value={authore}
              />
              <label>Images :</label>
              <input
                onChange={onChangeFiles}
                name="file"
                placeholder="Chooose File"
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
                onChange={getCategoryId}
              >
                {data.map((e: any) => (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>

              <label>Price :</label>
              <input
                name="price"
                value={price}
                onChange={onInputChangePrice}
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
