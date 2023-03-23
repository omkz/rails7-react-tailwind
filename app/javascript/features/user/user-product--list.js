import React from 'react';
import UserProductItem from "./user-product-item";

const UserProductList = ({ list }) => (
    <ul>
        {list.map((item) => (
            <UserProductItem key={item.id} item={item}/>
        ))}
    </ul>
);
export default UserProductList


