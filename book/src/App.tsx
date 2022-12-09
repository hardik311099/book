import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import BookAdd from "./Components/addbook/BookAdd";
import CategoryAdd from "./Components/addCategory/CategoryAdd";
import Navebar from "./Components/Navbar/Navebar";
import CategoryUpdata from "./Components/UpdateCategory/CategoryUpdate";
import Book from "./Page/Book/Book";
import Category from "./Page/Category/Category";
import Login from "./Page/Login/Login";
import Signup from "./Page/SignUp/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Navebar />
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addbook" element={<BookAdd />} />
          <Route path="/category" element={<Category />} />
          <Route path="/addcategory" element={<CategoryAdd />} />
          <Route path="/updatacategory/:id" element={<CategoryUpdata />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
