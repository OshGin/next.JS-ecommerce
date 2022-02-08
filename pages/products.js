import Head from 'next/head';
import Layout from './components/Layout';
import { css } from '@emotion/react';
import pictures from './components/database';
import Link from 'next/link';

const buttonStyle = css`
  background-color: black;
  color: white;
  border: black, solid;
  border-radius: 20px;
`;

const pictureStyle = css`
  border-radius: 5px;
  border: 1px solid black;
  padding: 15 px;
  margin-bottom: 20px;
`;

export default function ProductOverview() {
  return (
    <Layout>
      <Head>
        <title>Product</title>
        <meta name="ecommerce picture store" content="product details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> Product Overview </h1>
      {pictures.map((picture) => {
        return (
          <div key={`id-${pictures.id}`} css={pictureStyle}>
            <h2>{picture.name}</h2>
            {picture.preview}
            <br />
            <br />
            {picture.price} Clicks{' '}
            <Link href={`/products/${picture.id}`}>
              <a>
                <button css={buttonStyle}>More about me</button>
              </a>
            </Link>
            <button css={buttonStyle}>Add me</button>
            <button css={buttonStyle}>Buy me</button>
            <br />
            <br />
          </div>
        );
      })}
    </Layout>
  );
}

//export function getServerSideProps(contex) {
//return {
//props: { pictures: pictures },
//};
//}
