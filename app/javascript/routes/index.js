import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductList from "../features/products/components/product-list";
import CreateProduct from "../features/products/components/create-product";
import EditProduct from "../features/products/components/edit-product";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/products" element={<ProductList/>} />
                    <Route path="/products/create" element={<CreateProduct />} />
                    <Route path="/products/edit/:id" element={<EditProduct />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
