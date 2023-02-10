import React from 'react';
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const ProductItem = ({item, onRemove, onUpdate}) => {
    return (
        <li>
            <span>{item.title}</span>
            <span>{item.price}</span>

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
