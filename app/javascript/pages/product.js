import React, {useEffect, useState} from "react";
import ProductList from "../features/products/components/product-list";
import { Link } from "react-router-dom";


const Product = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('/api/v1/products.json');
        const data = await response.json();
        setList(data);
    }

    const deleteProduct = async (id) => {
        await fetch(`/api/v1/products/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
            }
        });
        fetchData();
    }

    const updateProduct = async (e) => {
        e.preventDefault();
        const product = {title, price};
        await fetch(`/api/v1/products/${id}`, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
            }
        });
        navigate("/products");
    }


    return (
        <div>
            <Link to="/products/create">Add New</Link>
            <ProductList list={list} onRemove={deleteProduct} onUpdate={updateProduct}/>
        </div>
    )
}

export default Product
