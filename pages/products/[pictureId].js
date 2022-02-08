import Head from 'next/head';
import Layout from '../components/Layout';
import pictures from '../components/database';

export default function SinglePicture(props) {
  return (
    <Layout>
      <Head>
        <title>Product details</title>
        <meta name="ecommerce picture store" content="product details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {pictures.fullview}
    </Layout>
  );
}
//
//export async function getServerSideProps(context) {
//  const pictureId = context.query.pictureId;
//  const picture = await pictures(pictures);
//
//  return {
//    props: {
//      pictures: picture,
//    },
//  };
//}
//
