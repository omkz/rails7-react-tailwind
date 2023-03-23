import React from 'react';

const UserProductItem = ({item}) => {
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
                {item.attributes.user.email}
            </div>
        </div>
    )
}

export default UserProductItem
