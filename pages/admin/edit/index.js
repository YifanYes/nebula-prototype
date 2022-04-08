// List all products by fetching them from the /api/products endpoint
// Use the id key to link to that specific entry, which will be matched by admin/edit/[id].js

import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

const List = () => {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const res = await axios.get('/api/products');
        setProducts(res.data.productsData);
    }, []);

    return (
        <div>
            <h1>Products</h1>
            {products.map(product => (
                <div key={product.id}>
                    <Link href={`/admin/edit/${product.id}`}>
                        <a>{product.product_name}</a>
                    </Link>
                    <br />
                </div>
            ))}
        </div>
    );
}

export default List;