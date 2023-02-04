import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import ProductList from "./ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
