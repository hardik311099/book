import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdFilterListAlt } from "react-icons/md";
import { projectAPI } from "../../Components/projectAPI";
import "./book.css";
function Book() {
  const [book, setbook] = useState<Array<Data>>([]);
  interface Data {
    id: string;
    bookname: string;
    authore: string;
    Category: {
      id: string;
      name: string;
    };
    price: number;
    images: [];
  }

  useEffect(() => {
    async function loadBook() {
      try {
        const data = await projectAPI.getbook();
        // let response = data.data.map((ele: any) => ele.Category);
        // let cate = response.map((data: any) => data);
        // console.log(cate);

        setbook(data.data.sort());
      } catch (error) {
        console.log(error);
      }
    }
    loadBook();
  });
  let count = 1;
  return (
    <>
      <div className="books">
        <div className="book">
          <div className="book_add">
            <div className="buttonadd_buttons">
              <div className="filter_data">
                <MdFilterListAlt />
              </div>
              <NavLink to="/addbook" className={"buttonadd"}>
                Add Book
              </NavLink>
            </div>
          </div>
          <div className="books_heders bh">
            <div className="book_id">Id</div>
            <div className="book_name">Name</div>
            <div className="book_authore">Authore</div>
            <div className="book_image">image</div>
            <div className="book_category ">Category</div>
            <div className="book_price ">Price</div>
          </div>
          <ul>
            {book.map((b) => (
              <div className="book_body bh" key={b.id}>
                <div className="book_id">{count++}</div>
                <div className="book_name">{b.bookname}</div>
                <div className="book_authore">{b.authore}</div>
                <div className="book_image">
                  {b.images.map((i: any) => (
                    <img
                      src={i}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  ))}
                </div>

                <div className="book_category ">{b.Category.name}</div>
                <div className="book_price ">{b.price}</div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Book;
