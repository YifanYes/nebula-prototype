/* 
*This is the product detail page, generated dinamically from the slug

In getStaticProps we'll capture the slug from *context*.params and use this to filter the entries collection
to find the document matching that specific slug value.
Then we'll return the data of that entry as a prop.
If the slug entered doesn't exist, then we'll return an empty props object
*/

/*
When a page has dynamic routes and has getStaticProps, then it needs to use the getStaticPaths as well
Here we define a list of paths that will be generated at build time
Setting fallback:true trigers a static generation in the background for new entries
*/

import { useRouter } from 'next/router';
import db from '../../utils/db';

const Product = (props) => {
    const { product } = props;
    const router = useRouter();

    if (router.isFallback) {
        return (
            <div>Loading...</div>
        )
    } else {
        if (product) {
            return (
                <div>
                    <h1>{product.product_name}</h1>
                    <h4>{product.price}</h4>
                    <p>{product.description}</p>
                </div>
            );
        } else {
            return (
                <div>Not found :(</div>
            )
        }
    }
};

export const getStaticPaths = async () => {
    const products = await db.collection('products').get();
    const paths = products.docs.map(product => ({
        params: {
            slug: product.data().slug
        }
    }));
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async (context) => {
    const { slug } = context.params;
    const res = await db.collection('products').where('slug', '==', slug).get();
    const entry = res.docs.map(product => product.data());

    if (product.length) {
        return {
            props: {
                product: product[0]
            }
        }
    } else {
        return {
            props: {}
        }
    }
}

export default Product;