import { useState } from "react";
import dashify from "dashify";
import axios from 'axios';

const Product = () => {
    // State variable holding title and body properties that will be send as an entry
    const [content, setContent] = useState({
        productName: undefined,
        description: undefined,
        price: undefined,
    })

    const onChange = (e) => {
        const { value, productName } = e.target;
        setContent(prevState => ({ ...prevState, [productName]: value }));
    }

    // Makes a POST call to /api/entry with an object containing the productName, description, price and slug
    // The slug is generated from the title variable through the dashify package
    const onSubmit = async () => {
        const { productName, description, price } = content;
        await axios.post('/api/product', {
            productName,
            //slug: dashify(productName), 
            description,
            price
        });
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

            <label htmlFor="description">Description</label>
            <textarea
                name='description'
                value={content.description}
                onChange={onChange}
            />

            <label htmlFor="price">Price</label>
            <input
                type="number"
                name="price"
                value={content.price}
                onChange={onChange}
            />

            <button onClick={onSubmit}>UPLOAD</button>
        </div>
    );
};

export default Product;