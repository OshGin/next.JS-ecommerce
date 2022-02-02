import Head from 'next/head';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>click and buy</title>
        <meta name="ecommerce picture store" content="click and buy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <body>
          <h1>Find your picture</h1>
        </body>
      </main>
      <Footer />
    </div>
  );
}
