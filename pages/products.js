import Head from 'next/head';
import Layout from './components/Layout';

export default function ProductOverview() {
  return (
    <Layout>
      <Head>
        <title>Product</title>
        <meta name="ecommerce picture store" content="product details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Product Overview </h1>
      <p>All you can click on!</p>
      <p> Hear you will find the products soon!</p>
    </Layout>
  );
}
