import Head from 'next/head';
import Layout from '../components/Layout';
import pictures from '../../util/database';

export default function pictureDetail(props) {
  return (
    <Layout>
      <Head>
        <title>Product Detail (title)</title>
        <meta name="ecommerce picture store" content="product details" />
      </Head>
      <h1>More information about {props.title}</h1>
      <div>ID-{props.pictuer.pictureId};</div>
      <div>title-{props.pictuer.title};</div>
      <div>discription-{props.pictuer.discription};</div>
    </Layout>
  );
}

export function getServerSideProps(context) {
  const pictureId = context.query.pictureId;
  console.log('test', pictureId);

  const matchingPicture = pictures.find((picture) => {
    // eslint-disable-next-line sonarjs/prefer-single-boolean-return
    if (picture.id === pictureId) {
      return true;
    } else {
      return false;
    }
  });
  console.log('pic', matchingPicture);
  return {
    props: {
      //picture: matchingPicture,
      //pictureId: pictureId,
    },
  };
}
