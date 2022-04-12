import '../styles/globals.css';
import Layout from "../components/layout/layout";
import WishlistContextProvider from "../contexts/wishlist_context";

export default function MyApp({ Component, pageProps }) {
  return (
    <WishlistContextProvider>
      <Layout title={Component.title} description={Component.description} header={Component.header}>
        <Component {...pageProps} />
      </Layout>
    </WishlistContextProvider>
  );
}
