import React from "react";
import "./book.css";
function Book() {
  return (
    <>
      <div className="book">
        <div className="books_heders bh">
          <div className="book_id">Id</div>
          <div className="book_name">Name</div>
          <div className="book_authore">Authore</div>
          <div className="book_image">image</div>
          <div className="book_category ">Category</div>
          <div className="book_price ">Price</div>
        </div>
        <div className="book_body bh">
          {/* books.map(book=>{
                <>
                
                <div className="book_id">Id</div>
                <div className="book_name">Name</div>
                <div className="book_authore">Authore</div>
                <div className="book_image">image</div>
                <div className="book_category ">Category</div>
                <div className="book_price ">Price</div>
                </>
            }) */}
        </div>
      </div>
    </>
  );
}

export default Book;
