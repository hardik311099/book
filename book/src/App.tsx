import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navebar from "./Components/Navbar/Navebar";
import Book from "./Page/Book/Book";
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
