import React from 'react';

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const response = await fetch('/api/v1/products.json');
        const data = await response.json();
        setProducts(data);
    }

    const deleteProduct = async(id) => {
        await fetch(`/api/v1/products/${id}`,{
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json',
                "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
            }
        });
        fetchData();
    }

    return (
        <div>
            <table className="border-blue-400">
                <thead className='bg-indigo-500'>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{ index + 1 }</td>
                            <td>{ product.title }</td>
                            <td>{ product.price }</td>
                            <td>
                                <button onClick={() => deleteProduct(product.id)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default ProductList
