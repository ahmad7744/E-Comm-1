import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./categories";
import Test1 from "./test1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/test1" element={<Test1 />} />
  
      </Routes>
    </Router>
  );
}

export default App;
