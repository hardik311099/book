import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdFilterListAlt } from "react-icons/md";
import { projectAPI } from "../../Components/projectAPI";
import "./book.css";

function Book() {
  const [book, setbook] = useState<Array<Data>>([]);

  const [q, setQ] = useState("");

  interface Data {
    id: string;
    bookname: string;
    authore: string;
    Category: {
      id: string;
      name: string;
    };
    price: number;
    images: [""];
  }

  // function formetDescription(images: any) {
  //   return images.file(0, 2) + "...";
  // }
  useEffect(() => {
    async function loadBook() {
      try {
        const data = await projectAPI.getbook();

        let bookData = data.data;
        // eslint-disable-next-line
        {
          q.length === 0
            ? bookData.sort((a: any, b: any) =>
                b.Category.name.localeCompare(a.Category.name)
              )
            : bookData.sort((a: any, b: any) => b.bookname.localeCompare(q));
        }
        setbook(bookData);
      } catch (error) {
        console.log(error);
      }
    }
    loadBook();
  });
  // }

  let count = 1;

  return (
    <>
      <div className="books">
        <div className="book">
          <div className="book_add">
            <div className="buttonadd_buttons">
              <div className="serchBar">
                <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  className="search-input"
                  placeholder="Search for..."
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
                <button className="searchbarButton">Search</button>
              </div>
              <div className="filter_data">
                <MdFilterListAlt />
              </div>
              <NavLink to="/addbook" className={"buttonadd"}>
                Add Book
              </NavLink>
            </div>
          </div>
          <div className="books_heders bh">
            <div className="bk book_id ">Id</div>
            <div className="bk book_name">Name</div>
            <div className="bk book_authore">Authore</div>
            <div className="bk book_image">image</div>
            <div className="bk book_category ">Category</div>
            <div className="bk book_price ">Price</div>
          </div>
          <ul>
            {book.map((b) => (
              <div className="book_body bh" key={b.id}>
                <div className="book_id  bk">{count++}</div>
                <div className="book_name bk">{b.bookname}</div>
                <div className="book_authore bk">{b.authore}</div>
                <div className="book_image bk">
                  <img
                    src={b.images[0]}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                  {/* {b.images.map((i: any) => (
                    <img
                      src={i}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  ))} */}
                </div>

                <div className="book_category bk">{b.Category.name}</div>
                <div className="book_price bk">{b.price}</div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Book;
