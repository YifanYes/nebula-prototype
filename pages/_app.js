import '../styles/globals.css';
import Layout from "../components/layout/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout title={Component.title} description={Component.description} header={Component.header}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
