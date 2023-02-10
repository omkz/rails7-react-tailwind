import React, {useEffect, useState} from "react";
import ProductList from "../features/products/components/product-list";


const Home = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('/api/v1/products.json');
        const data = await response.json();
        setList(data);
    }

    return (
        <div>
            <h2>This is Home Page</h2>
            <ProductList list={list} onRemove={false} onUpdate={false}/>
        </div>
    )
}

export default Home
