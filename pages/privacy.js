import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Head from 'next/head';
import PrivacyPolicy from '../components/PrivacyPolicy.js';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Zop Studios</title>
        <meta name="description" content="Zop Studios." />
        <meta property="og:title" content="Zop Studios" />
        <meta property="og:description" content="lOL." />
        <meta property="og:image" content="/img/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="color" content="#ffca2b" />
      </Head>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
