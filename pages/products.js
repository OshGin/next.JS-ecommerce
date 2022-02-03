import Footer from './components/Footer';
import Header from './components/Header';

export default function ProductOverview() {
  return (
    <div>
      <title>click and buy</title>
      <meta name="ecommerce picture store" content="click and buy" />
      <link rel="icon" href="/favicon.ico" />
      <Header />
      <main>
        {' '}
        <h1> Product Overview </h1>
        <p>All you can click on!</p>
        <p> Hear you will find the products soon!</p>
      </main>
      <Footer />
    </div>
  );
}
