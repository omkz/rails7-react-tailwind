import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const saveProduct = async(e) => {
        e.preventDefault();
        const product = { title, price };
        await fetch('/api/v1/products',{
            method: "POST",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json',
                "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
            }
        });
        navigate("/");
    }

    return (
        <div>
            <form onSubmit={saveProduct}>
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
                    <button className="bg-orange-500">Save</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
