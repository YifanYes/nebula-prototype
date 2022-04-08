// Endpoint GET /api/product/[id].js
// Fetch the data of a specific product by id and populate the page's information

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dashify from 'dashify';
import axios from 'axios';

const EditProduct = () => {
    const router = useRouter();
    const [content, setContent] = useState({
        productName: undefined,
        description: undefined,
        price: undefined,
    });

    useEffect(async () => {
        const { id } = router.query;
        if (id) {
            const res = await axios.get(`/api/product/${id}`);
            const { productName, description, price } = res.data;
            setContent({
                productName,
                description,
                price
            });
        }
    }, [router]);

    const onChange = (e) => {
        const { value, productName } = e.target;
        setContent(prevState => ({ ...prevState, [productName]: value }));
    }

    const onSubmit = async (e) => {
        const { id } = router.query;
        const { productName, description, price } = content;
        console.log(id, productName, description, price);
        await axios.put(`/api/product/${id}`, {
            slug: dashify(productName),
            productName,
            description,
            price
        });
    }

    const onDelete = async () => {
        const { id } = router.query;
        await axios.delete(`/api/product/${id}`);
        router.back();
    }

    return (
        <div>
            <label htmlFor='productName'>Product Name</label>
            <input
                type='text'
                name='productName'
                value={content.productName}
                onChange={onChange}
            />
            <label htmlFor='description'>Description</label>
            <textarea
                name='description'
                value={content.description}
                onChange={onChange}
            />
            <button
                type='button'
                onClick={onSubmit}
            >Update</button>
            <button
                type='button'
                onClick={onDelete}
            >Delete</button>
        </div>
    );
};

export default EditProduct;