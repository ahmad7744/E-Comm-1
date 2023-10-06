import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./categories";
import Producttype from "./Producttype";
import ProductSize from "./ProductSize";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/producttype" element={<Producttype />} />
        <Route path="/productsize" element={<ProductSize />} />
  
  
      </Routes>
    </Router>
  );
}

export default App;
