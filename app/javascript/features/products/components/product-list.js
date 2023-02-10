import React from 'react';
import ProductItem from "./product-item";

const ProductList = ({ list, onRemove, onUpdate }) => (
    <ul>
        {list.map((item) => (
            <ProductItem key={item.id} item={item} onRemove={onRemove} onUpdate={onUpdate}/>
        ))}
    </ul>
);
export default ProductList
