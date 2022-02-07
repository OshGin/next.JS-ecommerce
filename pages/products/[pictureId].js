import Head from 'next/head';
import Layout from '../components/Layout';
import pictures from '../../util/database';

export default function SinglePicture(props) {
  return (
    <Layout>
      <Head>
        <title>Product details</title>
        <meta name="ecommerce picture store" content="product details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Picture Details </h1>
      <div>picture-id {props.pictureId}</div>
      <div>picture-description {props.discription}</div>
      <div> {pictures.fullview} </div>
    </Layout>
  );
}

export function getServerSideProps(context) {
  const pictureId = context.query.pictureId;
  return {
    props: {
      pictureId: pictureId,
    },
  };
}
