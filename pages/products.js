import Head from 'next/head';
import Layout from './components/Layout';
import { css } from '@emotion/react';
import pictures from '../util/database';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../util/localStorage';

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
  // const localStorage = typeof window !== 'undefined' ? window.localStorage : [];
  // const initalBuyMe =
  //   localStorage.getItem && localStorage.getItem('buyMe')
  //     ? localStorage.getItem('buyMe')
  //     : true;

  const myBuyme = getLocalStorage('buyMe') || true;
  const [buyMe, setBuyMe] = useState(myBuyme);

  function buyByToggle() {
    const newBuyme = !buyMe;
    setBuyMe(!buyMe);
    setLocalStorage('buyMe', newBuyme);
  }
  useEffect(() => {
    const mynewBuyme = getLocalStorage('buyMe') || false;
    setBuyMe(mynewBuyme);
  }, []);

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
            <br />
            <br />
          </div>
        );
      })}
      <button onClick={() => buyByToggle()} css={buttonStyle}>
        {buyMe ? 'remove me' : 'buy me'}
      </button>
      <br />
      <br />
    </Layout>
  );
}

export function getServerSideProps() {
  return {
    props: { pictures: pictures },
  };
}
