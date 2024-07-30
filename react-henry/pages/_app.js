// pages/_app.js
import '../styles/globals.css';
import Head from 'next/head';
import RootLayout from '../pages/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default MyApp;
