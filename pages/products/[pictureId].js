import Head from 'next/head';
import Layout from '../components/Layout';
import pictures from '../../util/database';
import Image from 'next/image';
import Link from 'next/link';

export default function picture(props) {
//  return (
//    <div>
//      <Layout>
//        <Head>
//          <title>details</title>
//          <meta Product />
//        </Head>
//        <h1>Test text</h1>
//        <h2>
//          {' '}
//          <Image src={pictures.preview} width="400px" height="400" />{//' '}
//        </h2>//
//      </Layout>//
//    </div>
//  );
//}

//export async function getServerSideProps(context) {
// anything that is after the products/{ in the URL}
//const pictureId = context.query.pictureId;

// TODO: 1. get your pictures Import them
// const allPictures = pictures;
// 2. find the picture that match the number on pictureId
//const preview = pictures.find(preview);
//const singlePicture = preview(pictureId);
// const picture = await pictures(pictureId);
//return {
//props: {
//picture: singlePicture,
// },
//  };
//}