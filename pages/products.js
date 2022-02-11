import Head from 'next/head';
import Layout from './components/Layout';
import { css } from '@emotion/react';
import pictures from '../util/database';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const buttonStyle = css`
  background-color: black;
  color: white;
  border-radius: 20px;
  font-size: large;
`;

const pictureStyle = css`
  //border-radius: 5px;
  border: 1px solid black;
  padding: 15 px;
  margin-bottom: 20px;
`;
//const addToCard = ()=>

export default function ProductOverview(props) {
  const [buyMe, setBuyMe] = useState(true); //window.localStorage.getItem('buyMe')
  function buyByToggle() {
    setBuyMe(!buyMe);
  }

  return (
    <Layout>
      <Head>
        <title>Product</title>
        <meta name="ecommerce picture store" content="product details" />
      </Head>

      <h1> Product Overview </h1>
      {props.pictures.map((picture) => {
        return (
          <div key={`id-${pictures.id}`} css={pictureStyle}>
            <h2>{picture.title}</h2>
            <div css={pictureStyle}>
              {' '}
              <Image src={picture.preview} width="400px" height="400" />
            </div>
            <br />
            <br />
            <span
              css={css`
                font-size: large;
                font-weight: bold;
              `}
            >
              {picture.price} Clicks{' '}
            </span>
            <Link href={`/products/${picture.id}`}>
              <a>
                <button css={buttonStyle}>More about me</button>
              </a>
            </Link>
            <button css={buttonStyle}>how many</button>

            <button onClick={() => buyByToggle()} css={buttonStyle}>
              {buyMe ? 'buy me' : 'remove me'}
            </button>
            <br />
            <br />
          </div>
        );
      })}
    </Layout>
  );
}

export function getServerSideProps() {
  return {
    props: { pictures: pictures },
  };
}
