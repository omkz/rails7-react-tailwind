import React from 'react';
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async() => {
        const response = await fetch(`/api/v1/products/${id}`);
        const data = await response.json();
        setTitle(data.title);
        setPrice(data.price);
    }

    const updateProduct = async(e) => {
        e.preventDefault();
        const product = { title, price };
        await fetch(`/api/v1/products/${id}`,{
            method: "PUT",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json',
                "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
            }
        });
        history.push("/");
    }

    return (
        <div>
            <form onSubmit={updateProduct}>
                <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                </div>
                </div>

                <div className="field">
                <label className="label">Price</label>
                <div className="control">
                    <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" />
                </div>
                </div>

                <div className="field">
                <div className="control">
                    <button className="bg-indigo-500">Update</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default EditProduct
