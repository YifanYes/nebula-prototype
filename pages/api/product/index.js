// import db to establish communication with the database
// Firestore has collections, each one has multiple documents
import db from '../../../utils/db';

export default async (req, res) => {
    try {
        //const { slug } = req.body;
        const products = await db.collection('products').get();
        const productsData = products.docs.map(product => product.data());

        // Use slug key's value to check if there's already another product with the same slug value
        // If there is, we'll end the request

        /*
        if (productsData.some(product => product.slug === slug)) {
            res.status(400).end();
        } 
        */
        // Specify the name of the collection and the data to be added
        // If it doesn't exist, it will be automatically created with the specified name and a document will be added with a random id
        // The document contains the data we passed
        const { id } = await db.collection('products').add({
            // Spread the object into another one and add the created key with the current timestamp as a value
            ...req.body,
            created: new Date().toISOString(),
        });
        res.status(200).json({ id });

    } catch (e) {
        res.status(400).end();
    }
}