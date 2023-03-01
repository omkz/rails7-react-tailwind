import React from 'react';
import {Link} from "react-router-dom";

const ProductItem = ({item, onRemove, onUpdate}) => {
    return (
        <li>
            <span>{item.attributes.title}</span>
            <span>{item.attributes.price}</span>
            <span> <img src={item.attributes.image_url} alt="product image" className="latest-image" /></span>

            {onRemove ?
            <button type="button" onClick={() => onRemove(item.id)}>
                | Remove
            </button> : "" }

            {onUpdate ?
            <Link to={`/products/edit/${item.id}`} className="button is-small is-info"> Edit</Link> : "" }

        </li>
    )
}

export default ProductItem
