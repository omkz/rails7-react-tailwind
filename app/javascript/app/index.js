import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductList from "./components/product/ProductList";
import AddProduct from "./components/product/AddProduct";
import EditProduct from "./components/product/EditProduct";

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
