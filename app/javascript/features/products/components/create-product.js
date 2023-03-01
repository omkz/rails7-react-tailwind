import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const CreateProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("product[title]", title);
        data.append("product[price]", price);
        data.append("product[image]", image);

        await fetch('/api/v1/products', {
            method: "POST",
            body: data,
            headers: {
                "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
            }
        })
            .then((response) => response.json())
            .catch((error) => console.error(error));

        navigate("/products");
    }

    const loadImage = (e) => {
        const image = e.target.files[0];
        setImage(image);
        setPreview(URL.createObjectURL(image));
    };


    return (
        <div>
            <form onSubmit={saveProduct}>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text"
                               placeholder="Title"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="text"
                               placeholder="Price"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Upload Image</label>
                    <div className="control">
                        <input className="file" onChange={loadImage} type="file" accept="image/*" />
                    </div>
                </div>

                {preview ? (
                    <figure className="image is-128x128">
                        <img src={preview} alt="Preview Image" />
                    </figure>
                ) : (
                    ""
                )}

                <div className="field">
                    <div className="control">
                        <button className="bg-orange-500">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct
