// Fetch products and list products

// We'll fetch all documents in the products collection and simultaneously order them with the created key
// Map through the returned value and return a new array of objects where product data will be spreaded and also add the document id

import db from '../../utils/db';

export default async (req, res) => {
    try {
        const products = await db.collection('products').get();
        const productsData = products.docs.map(product => ({
            id: product.id,
            ...product.data()
        }));
        res.status(200).json({ productsData });
    } catch (e) {
        res.status(400).end();
    }
}