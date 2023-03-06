import React from 'react';
import {Link} from "react-router-dom";

const ProductItem = ({item, onRemove, onUpdate}) => {
    return (
        <div className="grid grid-cols-6 items-center gap-4">
            <div className="mb-4">
                <img src={item.attributes.image_url} alt="product image" className="latest-image"/>
            </div>
            <div className="mb-4">
                {item.attributes.title}
            </div>
            <div className="mb-4">
                {item.attributes.price}
            </div>
            <div className="mb-4">
                {onRemove ?
                    <button type="button" onClick={() => onRemove(item.id)}>
                        Remove | 
                    </button> : ""}

                {onUpdate ?
                    <Link to={`/products/edit/${item.id}`} className="button is-small is-info"> Edit</Link> : ""}
            </div>
        </div>
    )
}

export default ProductItem
